// src/pages/ArticleDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ArticleDetailPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        // Adjust this URL to your Strapi API endpoint
        // This assumes your articles have a 'slug' field
        const response = await fetch(
          `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Strapi returns an array of results, even for filters that return one item
        if (data.data && data.data.length > 0) {
          // Assuming the structure is data.data[0].attributes
          setArticle(data.data[0].attributes);
        } else {
          setArticle(null); // No article found
        }
      } catch (e) {
        console.error("Failed to fetch article:", e);
        setError("Could not load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]); // Re-fetch when the slug changes

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
          <Link to="/articles">Back to Articles</Link>
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

  // Helper to get image URL from Strapi
  const getStrapiImageUrl = (imageObject) => {
    if (!imageObject || !imageObject.data) return "/placeholder.svg";
    const url = imageObject.data.attributes.url;
    // Prepend base URL if Strapi serves relative paths
    return url.startsWith('/') ? `http://localhost:1337${url}` : url;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="relative text-center mb-12">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-200 via-purple-500 to-purple-200 rounded-full"></div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
          {article.title}
        </h1>
        <p className="text-muted-foreground relative">{article.excerpt}</p>
      </div>

      <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
        <img
          src={getStrapiImageUrl(article.mainImage)} // Assuming 'mainImage' is the field name for your image in Strapi
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
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span> {/* Use publishedAt from Strapi */}
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>~5 min read</span> {/* You can calculate this based on content length */}
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Badge className="w-fit" variant="secondary">{article.category}</Badge> {/* Assuming 'category' is a string field */}
      </div>

      <div
        className="prose prose-lg max-w-none mx-auto text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: article.content }} // Assuming 'content' is the Rich Text field in Strapi
      />

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link to="/articles">Back to All Articles</Link>
        </Button>
      </div>
    </div>
  );
}