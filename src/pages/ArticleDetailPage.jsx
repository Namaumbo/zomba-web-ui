// src/pages/ArticleDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  Clock,
  User,
  Calendar,
  Heart,
  BookOpen,
  Users,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getArticle } from "../lib/api";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"


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
          <Link to="/articles">{"<-"} Back to Articles</Link>
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
    <div className="container  mx-auto flex gap-2 flex-col md:flex-row">
      <div className="px-4 py-12 max-w-6xl">
        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 ">
          <BookOpen className="w-3 h-3 mr-1" />
          Church News and Ministry
        </Badge>
        <div className="relative text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text  ">
            {article.title}
          </h1>
        </div>

        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8 shadow-2xl">
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

        <div
          className="prose prose-lg max-w-none mx-auto text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/articles">{"<"}- Back to All Articles</Link>
          </Button>
        </div>
      </div>
      <aside className="lg:col-span-1 mt-6 pt-4">
        <div className="sticky top-40 space-y-6 ">
          {/* Author Card */}
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                About the Author
              </h3>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MN
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mr. Namaumbo</p>
                  <p className="text-sm text-gray-600">Ministry Coordinator</p>
                </div>
                <p className="text-sm text-gray-700">
                  Dedicated to fostering spiritual growth and character
                  development in our educational community.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Related Articles
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Building Character Through Faith
                  </h4>
                  <p className="text-xs text-gray-600">
                    How our programs shape young minds
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Community Outreach Programs
                  </h4>
                  <p className="text-xs text-gray-600">
                    Serving our local community
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    Youth Ministry Updates
                  </h4>
                  <p className="text-xs text-gray-600">
                    Latest news from our youth programs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Stay Connected</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates on church
                programs and community events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  );
}
