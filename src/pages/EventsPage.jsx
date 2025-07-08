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
      title: "The Family Day ",
      date: "March 20, 2025",
      time: "7:30 AM",
      location: "Church ",
      description:
        "A special day for families to gather, fellowship and enjoy activities together.",
      category: "fellowship",
    },

    {
      id: 5,
      title: "Mass Wedding",
      date: "March 20, 2025",
      time: "7:30 AM",
      location: "Church ",
      description:
        "A sacred ceremony celebrating multiple couples joining in holy matrimony together as one community.",
      category: "ceremony",
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
                  Events & Features
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
                <div className="inline-block px-3 py-1 text-sm font-bold text-white bg-primary/80  rounded-full mb-4">
                  Highlights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Recent events
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
                Columns and Articles
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
