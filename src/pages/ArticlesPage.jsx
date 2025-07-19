"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, InfoIcon, User } from "lucide-react";
import { getAllArticles } from "../lib/api";
import {
  Heart,
  Users,
  BookOpen,
  Home,
  Shield,
  CreditCard,
  Smartphone,
  Building,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getAllArticles();
        const data = response.data;
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative flex flex-col items-center mb-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-16  mt-5"
        >
          <motion.div
            className=" mb-5 inline-flex items-center  rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200"
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <InfoIcon className="w-4 h-4 mr-1" />
            Our Stories
          </motion.div>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D3557] mb-6">
            Zomba<span className="text-primary"> Baptist </span> Church Stories
          </motion.h1>
          <motion.p className="max-w-3xl mx-auto text-lg text-[#1D3557]/80">
            Explore our collection of articles on faith, community, and
            spiritual growth to help you on your journey.
          </motion.p>
        </motion.div>
      </div>

      {/* Featured Article */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Article</h2>
        <div className="relative overflow-hidden rounded-xl">
          <div className="grid md:grid-cols-2 gap-6 bg-muted/50 p-6 rounded-xl">
            <div className="relative h-[400px] md:h-auto rounded-lg overflow-hidden">
              <img
                src="/uploads/articles/article.png"
                alt="Finding Peace in Prayer"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2">
                Healing the Heart: Christianity and Emotional Well-being Series:
                Christianity and Mental Health - Part 1
              </h3>
              <p className="text-muted-foreground mb-4">
                Mental health is not just about what we think or how we act. It
                also includes how we feel inside — deep in our hearts. The heart
                is the center of our emotions. It holds joy, sadness, fear,
                love, anger, and peace. When our hearts are hurting, our whole
                lives can feel heavy..
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Julie T. Soko</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>July 19, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/articles/finding-peace-in-prayer">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Categories */}
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Articles</h2>
      </div> */}

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div> */}
    </div>
  );
}

function ArticleCard({ article }) {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-28 w-full mt-[-1.5rem]">
        <img
          src={
            article?.imgURL?.url
              ? `${STRAPI_URL}${article.imgURL.formats.medium.url}`
              : "/api/placeholder/300/250"
          }
          alt={article.title}
          className="object-cover h-60 w-full"
        />
      </div>
      <CardContent className="mt-[1.5rem] xl:mt-[3.5rem] 2xl:mt-[7.5rem]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
        <CardTitle className="line-clamp-2 text-2xl">{article.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 pt-2 pb-2">
          <User size={14} />
          <span>{article.author}</span>
        </CardDescription>
        <div className=" gap-2 mb-6 bg-teal-50 p-4 rounded-lg">
          <p className="text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link to={`/articles/${article.slug}`} asChild>
          <Button variant="outline" className="w-full">
            Read Article
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

// Sample article data
// const articles = [
//   {
//     id: 1,
//     title: "Finding Peace in Prayer: A Guide for Modern Christians",
//     slug: "finding-peace-in-prayer",
//     author: "Pastor Makhenjera",
//     date: "May 15, 2023",
//     category: "Faith",
//     img: "/kidsandpaster.jpg",
//     excerpt:
//       "In today's fast-paced world, finding moments of peace through prayer can transform your spiritual journey and daily life.",
//   },
//   {
//     id: 2,
//     title: "Building a Strong Church Community in the Digital Age",
//     slug: "building-strong-church-community",
//     author: "Deacon Petro",
//     date: "April 28, 2023",
//     category: "Community",
//     img: "/youthMinistry.jpg",
//     excerpt:
//       "Discover how our church is adapting to modern times while maintaining the close-knit community that defines us.",
//   },
//   {
//     id: 3,
//     title: "Summer Youth Camp: Registration Now Open",
//     slug: "summer-youth-camp",
//     author: "Mayamiko ",
//     date: "April 10, 2023",
//     category: "Events",
//     img: "/evangelism.jpg",
//     excerpt:
//       "Our annual summer youth camp is back! Register your children for a week of fun, friendship, and spiritual growth.",
//   },
//   {
//     id: 4,
//     title: "Faith and Family: Balancing Modern Parenting with Christian Values",
//     slug: "faith-and-family",
//     author: "Smart",
//     date: "March 22, 2023",
//     category: "Family",
//     img: "/evanjelism.jpg",
//     excerpt:
//       "Practical advice for parents seeking to raise children with strong Christian values in today's challenging world.",
//   },
//   {
//     id: 5,
//     title: "Understanding the Psalms: A 5-Week Bible Study Series",
//     slug: "understanding-psalms",
//     author: "Limbani Jambo",
//     date: "March 15, 2023",
//     category: "Faith",
//     img: "/placeholder.svg?height=400&width=600",
//     excerpt:
//       "Join us for an in-depth exploration of the Psalms and discover the timeless wisdom they offer for our lives today.",
//   },
//   {
//     id: 6,
//     title: "Community Outreach: Serving Our Local Homeless Shelter",
//     slug: "community-outreach-homeless",
//     author: "Outreach Coordinator James Wilson",
//     date: "March 8, 2023",
//     category: "Community",
//     img: "/placeholder.svg?height=400&width=600",
//     excerpt:
//       "Learn about our recent service project at the downtown homeless shelter and how you can get involved in future outreach efforts.",
//   },
// ];
