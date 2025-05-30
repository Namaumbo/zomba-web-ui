"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  Share2,
} from "lucide-react";
import { getEvents } from "../lib/api";

export default function EventsPage() {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

  const [searchQuery, setSearchQuery] = useState("");

  const [featuredEvents, setFeaturedEvents] = useState([]);
  useEffect(() => {
    document.title = "Events | Zomba Baptist Church";
    const fetchEvents = async () => {
      try {
        const res = await getEvents();
        setFeaturedEvents(res.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = [
    {
      id: 4,
      title: "Men's Breakfast",
      date: "March 20, 2025",
      time: "7:30 AM",
      location: "Fellowship Hall",
      description:
        "Monthly men's breakfast with guest speaker John Davis discussing 'Faith in the Workplace'.",
      category: "fellowship",
    },
  ];

  const monthlyEvents = [
    {
      title: "Communion Sunday",
      day: "First Sunday",
      time: "Both Services",
      description:
        "We celebrate communion together on the first Sunday of each month.",
    },
    {
      title: "Men's Breakfast",
      day: "Third Friday",
      time: "7:30 AM",
      description:
        "Monthly gathering for men with breakfast, fellowship, and a guest speaker.",
    },
    {
      title: "Senior Adults Luncheon",
      day: "Fourth Thursday",
      time: "12:00 PM",
      description:
        "Monthly luncheon for seniors with special music and a guest speaker.",
    },
    {
      title: "Food Pantry Distribution",
      day: "Last Friday",
      time: "9:00 AM - 12:00 PM",
      description:
        "Monthly food distribution to families in need in our community.",
    },
  ];

  const pastEvents = [
    {
      title: "45th Anniversally Celebration Service",
      date: "November 9, 2025",
      img: "/WhatsApp Image 2025-01-27 at 17.21.17.jpeg",
    },
  ];

  const filteredEvents = upcomingEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[50%] md:h-[30rem] w-100% overflow-hidden">
            <img
              src="/bg-5.jpg"
              alt="Church events"
              className="object-cover w-full h-full"
              priority="true"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Events & Activities
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  Connect, grow, and serve through our various events and
                  activities
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Featured Events */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Highlights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Featured Events
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Mark your calendar for these special upcoming events at Zomba
                  Baptist Church.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-40  mt-[-8%]">
                    <img
                      src={
                        event?.imgUrl?.url
                          ? `${STRAPI_URL}${event?.imgUrl?.formats?.medium.url}`
                          : "/api/placeholder/300/250"
                      }
                      alt={event.title}
                      fill
                      className="object-cover overflow-hidden h-[13rem] md:h-[18rem] w-full"
                    />
                    <div className="absolute top-2 right-2 md:top-6">
                      <Badge className="bg-primary text-primary-foreground">
                        {event.category.charAt(0).toUpperCase() +
                          event.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 mt-1 xl:mt-10 2xl:mt-22">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link to={"/contact"}>
                        <Button variant="default" size="sm">
                          Learn More
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Upcoming Events */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Calendar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Upcoming Events
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Find an event that interests you and get involved in our
                  church community.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-[80%]  mx-auto mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-6">
                {filteredEvents.length > 0 ? (
                  <div className="space-y-4">
                    {filteredEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                                  {event.category.charAt(0).toUpperCase() +
                                    event.category.slice(1)}
                                </Badge>
                                <h3 className="text-xl font-bold">
                                  {event.title}
                                </h3>
                              </div>
                              <p className="text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 md:min-w-[280px]">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <MapPin className="h-4 w-4 text-primary" />
                                  <span>{event.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center sm:items-end">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full sm:w-auto"
                                >
                                  Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No events found matching your search.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline">Load More Events</Button>
            </div>
          </div>
        </section>

        
        {/* Regular Events */}
        <section className="py-12 md:py-16 ">
          <div className="mx-auto container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Regular Schedule
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Monthly Events
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  These events occur regularly each month at Zomba Baptist
                  Church.
                </p>
              </div>
            </div>
            <div  className="bg-slate-50 ">
              <div className="flex items-center justify-center min-h-screen p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                  {/* Communion Sunday Card */}
                  <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 backdrop-blur-sm">
                    {/* Floating bubbles */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl"></div>
                    <div className="absolute -top-2 -right-6 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-6 -left-2 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-18 h-18 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-lg"></div>

                    {/* Small floating dots */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-purple-300/60 rounded-full"></div>
                    <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-pink-300/60 rounded-full"></div>
                    <div className="absolute bottom-20 right-12 w-1 h-1 bg-blue-300/60 rounded-full"></div>
                    <div className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-purple-300/60 rounded-full"></div>

                    <CardContent className="relative p-8 space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Communion Sunday
                          </h2>
                          <p className="text-sm text-gray-500 font-medium">
                            First Sunday
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Both Services
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-600 leading-relaxed">
                          We celebrate communion together on the first Sunday of
                          each month.
                        </p>
                      </div>

                      <div className="flex justify-center pt-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Youth Group Card */}
                  <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 backdrop-blur-sm">
                    {/* Floating bubbles */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-xl"></div>
                    <div className="absolute -top-2 -right-6 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-6 -left-2 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-18 h-18 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-lg"></div>

                    {/* Small floating dots */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-emerald-300/60 rounded-full"></div>
                    <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-teal-300/60 rounded-full"></div>
                    <div className="absolute bottom-20 right-12 w-1 h-1 bg-green-300/60 rounded-full"></div>
                    <div className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-emerald-300/60 rounded-full"></div>

                    <CardContent className="relative p-8 space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Youth Group
                          </h2>
                          <p className="text-sm text-gray-500 font-medium">
                            Every Friday
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                        <div className="p-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          7:00 PM - 9:00 PM
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-600 leading-relaxed">
                          Join us for games, worship, and fellowship. Ages 13-18
                          welcome!
                        </p>
                      </div>

                      <div className="flex justify-center pt-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Community Outreach Card */}
                  <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 backdrop-blur-sm">
                    {/* Floating bubbles */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-xl"></div>
                    <div className="absolute -top-2 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-6 -left-2 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-18 h-18 bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-full blur-lg"></div>

                    {/* Small floating dots */}
                    <div className="absolute top-8 right-8 w-2 h-2 bg-orange-300/60 rounded-full"></div>
                    <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-amber-300/60 rounded-full"></div>
                    <div className="absolute bottom-20 right-12 w-1 h-1 bg-yellow-300/60 rounded-full"></div>
                    <div className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-orange-300/60 rounded-full"></div>

                    <CardContent className="relative p-8 space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            Community Outreach
                          </h2>
                          <p className="text-sm text-gray-500 font-medium">
                            Third Saturday
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                        <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          9:00 AM - 2:00 PM
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-600 leading-relaxed">
                          Serving our community through food drives and local
                          volunteer work.
                        </p>
                      </div>

                      <div className="flex justify-center pt-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Past Events */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Photo Gallery
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Past Events
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Take a look at some of our recent events and activities at
                  Zomba Baptist Church.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={event.img || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full aspect-[3/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-sm">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View Event Gallery</Button>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="mx-auto container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Stay Updated on Church Events
              </h2>
              <p className="text-primary-foreground/90 md:text-lg">
                Sign up for our weekly newsletter to receive updates on upcoming
                events, announcements, and opportunities to get involved.
              </p>
              <div className="mx-auto max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Button className="bg-background text-foreground hover:bg-background/90">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/70">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
