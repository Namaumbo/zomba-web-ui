"use client";

import {
  Heart,
  Play,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  BookOpen,
  Download,
  Share2,
  ChevronRight,
  Star,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Sermons");
  const [selectedDateRange, setSelectedDateRange] = useState("All Time");
  const [showFilters, setShowFilters] = useState(false);
  const [showDateFilter, setShowDateFilter] = useState(false);

  const sermonSeries = [
    {
      id: 1,
      title: "Walking in Faith",
      description: "A journey through the fundamentals of Christian faith",
      sermonCount: 8,
      img: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 2,
      title: "Love in Action",
      description: "Practical ways to show God's love in our daily lives",
      sermonCount: 6,
      img: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Building Character",
      description: "Developing Christ-like character in our communities",
      sermonCount: 5,
      img: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-green-600",
    },
  ];

  const recentSermons = [
    {
      id: 1,
      title: "The Power of Prayer in Education",
      pastor: "Pastor John Mwale",
      date: "2024-05-19",
      duration: "35 min",
      series: "Walking in Faith",
      scripture: "James 1:5-8",
      description:
        "Exploring how prayer transforms our approach to learning and teaching in faith-based education.",
      videoUrl: "/placeholder.svg?height=300&width=500",
      verses: [
        {
          reference: "James 1:5",
          text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
        },
        {
          reference: "James 1:6",
          text: "But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.",
        },
      ],
      tags: ["Prayer", "Education", "Wisdom"],
    },
    {
      id: 2,
      title: "Nurturing Young Hearts",
      pastor: "Pastor Sarah Banda",
      date: "2024-05-12",
      duration: "42 min",
      series: "Love in Action",
      scripture: "Proverbs 22:6",
      description:
        "Understanding our role in guiding children toward a life of faith and character.",
      videoUrl: "/placeholder.svg?height=300&width=500",
      verses: [
        {
          reference: "Proverbs 22:6",
          text: "Start children off on the way they should go, and even when they are old they will not turn from it.",
        },
      ],
      tags: ["Children", "Parenting", "Character"],
    },
    {
      id: 3,
      title: "Community and Fellowship",
      pastor: "Pastor David Phiri",
      date: "2024-05-05",
      duration: "38 min",
      series: "Building Character",
      scripture: "Hebrews 10:24-25",
      description:
        "The importance of gathering together and supporting one another in our faith journey.",
      videoUrl: "/placeholder.svg?height=300&width=500",
      verses: [
        {
          reference: "Hebrews 10:24",
          text: "And let us consider how we may spur one another on toward love and good deeds,",
        },
        {
          reference: "Hebrews 10:25",
          text: "not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.",
        },
      ],
      tags: ["Community", "Fellowship", "Encouragement"],
    },
  ];

  const categories = [
    "All Sermons",
    "Faith & Doctrine",
    "Christian Living",
    "Prayer & Worship",
    "Family & Relationships",
    "Youth Ministry",
    "Community Outreach",
  ];

  const dateRanges = [
    "All Time",
    "This Week",
    "This Month",
    "Last 3 Months",
    "This Year",
  ];

  const filteredSermons = recentSermons.filter((sermon) => {
    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Category filter
    const matchesCategory =
      selectedCategory === "All Sermons" ||
      sermon.tags.some((tag) => {
        switch (selectedCategory) {
          case "Faith & Doctrine":
            return ["Faith", "Doctrine", "Prayer"].includes(tag);
          case "Christian Living":
            return ["Character", "Community", "Living"].includes(tag);
          case "Prayer & Worship":
            return ["Prayer", "Worship"].includes(tag);
          case "Family & Relationships":
            return ["Parenting", "Children", "Family"].includes(tag);
          case "Youth Ministry":
            return ["Youth", "Children"].includes(tag);
          case "Community Outreach":
            return ["Community", "Outreach", "Fellowship"].includes(tag);
          default:
            return true;
        }
      });

    // Date filter
    const sermonDate = new Date(sermon.date);
    const now = new Date();
    const matchesDate = (() => {
      switch (selectedDateRange) {
        case "This Week": {
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return sermonDate >= weekAgo;
        }
        case "This Month": {
          const monthAgo = new Date(now.getFullYear(), now.getMonth(), 1);
          return sermonDate >= monthAgo;
        }
        case "Last 3 Months": {
          const threeMonthsAgo = new Date(
            now.getFullYear(),
            now.getMonth() - 3,
            1
          );
          return sermonDate >= threeMonthsAgo;
        }
        case "This Year": {
          const yearStart = new Date(now.getFullYear(), 0, 1);
          return sermonDate >= yearStart;
        }
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory && matchesDate;
  });

  const filterRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event)) {
        setShowFilters(false);
      }
      if (dateRef.current && !dateRef.current.contains(event)) {
        setShowDateFilter(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen ">
   

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover <span className="text-primary">Truth</span> Through
              Scripture
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our collection of sermons, dive deep into God's Word, and
              grow in your faith journey with our church community.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        {/* Featured Sermon */}
        <Card className=" bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Faith in Action: Living Out Our Beliefs"
                </h3>
                <p className="text-gray-700 mb-4">
                  A powerful message about putting our faith into practice in
                  our daily lives and communities.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>Pastor John Mwale</span>
                  <span>•</span>
                  <span>45 minutes</span>
                  <span>•</span>
                  <span>James 2:14-26</span>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Watch Now
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Featured sermon"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                  <Button
                    size="lg"
                    className="bg-white/90 text-purple-600 hover:bg-white rounded-full w-12 h-12 p-0"
                  >
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <Card className="">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search sermons, topics, or scripture..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative" ref={filterRef}>
                    <Button
                      variant="outline"
                      className=" hover:bg-purple-50"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    {showFilters && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white border  rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setSelectedCategory(category);
                                setShowFilters(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 text-sm transition-colors ${
                                selectedCategory === category
                                  ? "bg-purple-100 text-purple-700"
                                  : "text-gray-700"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={dateRef}>
                    <Button
                      variant="outline"
                      className=" hover:bg-purple-50"
                      onClick={() => setShowDateFilter(!showDateFilter)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Date
                    </Button>
                    {showDateFilter && (
                      <div className="absolute top-full left-0 mt-2 w-40 bg-white border  rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          {dateRanges.map((range) => (
                            <button
                              key={range}
                              onClick={() => {
                                setSelectedDateRange(range);
                                setShowDateFilter(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 text-sm transition-colors ${
                                selectedDateRange === range
                                  ? "bg-purple-100 text-purple-700"
                                  : "text-gray-700"
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {(searchTerm ||
          selectedCategory !== "All Sermons" ||
          selectedDateRange !== "All Time") && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-purple-900"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedCategory !== "All Sermons" && (
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All Sermons")}
                    className="ml-2 hover:text-purple-900"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedDateRange !== "All Time" && (
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  Date: {selectedDateRange}
                  <button
                    onClick={() => setSelectedDateRange("All Time")}
                    className="ml-2 hover:text-purple-900"
                  >
                    ×
                  </button>
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Sermons");
                  setSelectedDateRange("All Time");
                }}
                className="text-purple-700 hover:text-purple-900 hover:bg-purple-50"
              >
                Clear All
              </Button>
            </div>
          </div>
        )}

        {/* Sermon Series */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Current Series</h2>
            <Button
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              View All Series
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermonSeries.map((series) => (
              <Card
                key={series.id}
                className=" overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={series.img || "/placeholder.svg"}
                    alt={series.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge
                      className={`bg-gradient-to-r ${series.color} text-white mb-2`}
                    >
                      {series.sermonCount} Sermons
                    </Badge>
                    <h3 className="text-white font-bold text-lg">
                      {series.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{series.description}</p>
                  <Button className="w-full ">Explore Series</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Sermons */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Sermons</h2>
            <div className="flex gap-2">
              {categories.slice(0, 4).map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className={`cursor-pointer hover:bg-purple-50  transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-100 text-purple-700 border-purple-300"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredSermons.length > 0 ? (
              filteredSermons.map((sermon) => (
                <Card key={sermon.id} className=" overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Video Thumbnail */}
                    <div className="relative">
                      <img
                        src={sermon.videoUrl || "/placeholder.svg"}
                        alt={sermon.title}
                        width={500}
                        height={300}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white/90 text-purple-600 hover:bg-white rounded-full w-16 h-16 p-0"
                        >
                          <Play className="w-8 h-8" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-black/70 text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          {sermon.duration}
                        </Badge>
                      </div>
                    </div>

                    {/* Sermon Details */}
                    <div className="lg:col-span-2 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-700">
                          {sermon.series}
                        </Badge>
                        {sermon.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-gray-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {sermon.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{sermon.pastor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(sermon.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{sermon.scripture}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{sermon.description}</p>

                      {/* Scripture Verses */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-purple-600" />
                          Scripture Reading
                        </h4>
                        <div className="space-y-3">
                          {sermon.verses.map((verse, index) => (
                            <div key={index}>
                              <p className="text-gray-800 italic mb-1">
                                "{verse.text}"
                              </p>
                              <p className="text-sm font-medium text-purple-700">
                                — {verse.reference}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button className="">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Sermon
                        </Button>
                        <Button
                          variant="outline"
                          className="text-purple-700 hover:bg-purple-50"
                        >
                          <Volume2 className="w-4 h-4 mr-2" />
                          Listen
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 hover:bg-gray-50"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 hover:bg-gray-50"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No sermons found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Sermons");
                    setSelectedDateRange("All Time");
                  }}
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8"
            >
              Load More Sermons
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
