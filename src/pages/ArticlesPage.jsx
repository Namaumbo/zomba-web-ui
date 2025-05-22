import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Clock, User } from "lucide-react";

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="relative flex flex-col items-center mb-12 text-center">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-200 via-purple-500 to-purple-200 rounded-full"></div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
          Church Articles
        </h1>
        <p className="text-muted-foreground max-w-2xl relative">
          Explore our collection of articles on faith, community, and spiritual
          growth to help you on your journey.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Article</h2>
        <div className="relative overflow-hidden rounded-xl">
          <div className="grid md:grid-cols-2 gap-6 bg-muted/50 p-6 rounded-xl">
            <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
              <img
                src="/bg-3.jpg"
                alt="Finding Peace in Prayer"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-4" variant="secondary">
                Faith
              </Badge>
              <h3 className="text-3xl font-bold mb-2">
                Finding Peace in Prayer: A Guide for Modern Christians
              </h3>
              <p className="text-muted-foreground mb-4">
                In today's fast-paced world, finding moments of peace through
                prayer can transform your spiritual journey and daily life.
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Pastor Michael Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/articles/finding-peace-in-prayer">
                  Read Article
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Categories */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Articles</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

// Article Card Component
function ArticleCard({ article }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-28 w-full mt-[-1.5rem]">
        <img
          src={article.img || "/placeholder.svg"}
          alt={article.title}
          fill
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
const articles = [
  {
    id: 1,
    title: "Finding Peace in Prayer: A Guide for Modern Christians",
    slug: "finding-peace-in-prayer",
    author: "Pastor Makhenjera",
    date: "May 15, 2023",
    category: "Faith",
    img: "/kidsandpaster.jpg",
    excerpt:
      "In today's fast-paced world, finding moments of peace through prayer can transform your spiritual journey and daily life.",
  },
  {
    id: 2,
    title: "Building a Strong Church Community in the Digital Age",
    slug: "building-strong-church-community",
    author: "Deacon Petro",
    date: "April 28, 2023",
    category: "Community",
    img: "/youthMinistry.jpg",
    excerpt:
      "Discover how our church is adapting to modern times while maintaining the close-knit community that defines us.",
  },
  {
    id: 3,
    title: "Summer Youth Camp: Registration Now Open",
    slug: "summer-youth-camp",
    author: "Mayamiko ",
    date: "April 10, 2023",
    category: "Events",
    img: "/evangelism.jpg",
    excerpt:
      "Our annual summer youth camp is back! Register your children for a week of fun, friendship, and spiritual growth.",
  },
  {
    id: 4,
    title: "Faith and Family: Balancing Modern Parenting with Christian Values",
    slug: "faith-and-family",
    author: "Smart",
    date: "March 22, 2023",
    category: "Family",
    img: "/evanjelism.jpg",
    excerpt:
      "Practical advice for parents seeking to raise children with strong Christian values in today's challenging world.",
  },
  {
    id: 5,
    title: "Understanding the Psalms: A 5-Week Bible Study Series",
    slug: "understanding-psalms",
    author: "Limbani Jambo",
    date: "March 15, 2023",
    category: "Faith",
    img: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Join us for an in-depth exploration of the Psalms and discover the timeless wisdom they offer for our lives today.",
  },
  {
    id: 6,
    title: "Community Outreach: Serving Our Local Homeless Shelter",
    slug: "community-outreach-homeless",
    author: "Outreach Coordinator James Wilson",
    date: "March 8, 2023",
    category: "Community",
    img: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Learn about our recent service project at the downtown homeless shelter and how you can get involved in future outreach efforts.",
  },
];
