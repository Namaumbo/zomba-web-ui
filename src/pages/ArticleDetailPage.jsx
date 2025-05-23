// src/pages/ArticleDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getArticle } from "../lib/api";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await getArticle(slug);
        const data = response.data;
        setArticle(data[0]);
      } catch (e) {
        console.error("Failed to fetch article:", e);
        setError("Could not load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-red-600">
        <p className="text-lg">{error}</p>
        <Button asChild className="mt-4">
          <Link to="/articles">{"<-"} Back to Articles</Link>
        </Button>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/articles">Back to Articles</Link>
        </Button>
      </div>
    );
  }
  const getStrapiImageUrl = (imageObject) => {
    return imageObject.startsWith("/")
      ? `http://localhost:1337${imageObject}`
      : imageObject;
  };

  return (
    <div className="container max-w-7xl mx-auto flex gap-2 flex-col md:flex-row">
      <div className="px-4 py-12 max-w-4xl">
        <div className="relative text-center mb-12">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-200 via-purple-500 to-purple-200 rounded-full"></div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text  ">
            {article.title}
          </h1>
        </div>

        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
          <img
            src={getStrapiImageUrl(article?.imgURL?.formats?.medium?.url)}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground justify-center">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon size={16} />
            <span>{new Date(article.date).toLocaleDateString()}</span>{" "}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>~{article.CompletionTime} min read</span>{" "}
          </div>
        </div>

        <div className="gap-2 mb-2 bg-teal-50 p-4 rounded-lg">
          <p className="text-muted-foreground relative font-italic">
            {article.excerpt}
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Badge className="w-fit" variant="secondary">
            {article.category}
          </Badge>
          {/* Assuming 'category' is a string field */}
        </div>
        {/* 
    <div
      className="prose prose-lg max-w-none mx-auto text-gray-700 dark:text-gray-300"
      dangerouslySetInnerHTML={{ __html: article.content }}
    /> */}
        <ReactMarkdown>{article.content}</ReactMarkdown>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/articles">Back to All Articles</Link>
          </Button>
        </div>
      </div>
      <div className="bg-[#f3f4f6] p-4 rounded-2xl h-fit mt-12">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          A Message from Our Pastor
        </motion.div>
        <p>{}</p>
      </div>
    </div>
  );
}
