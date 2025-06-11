import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  MapPin,
  Clock,
  Quote,
  Heart,
  Target,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import data from "../lib/data.json";
import { useParams } from "react-router-dom";

export default function MinistryDetailPage() {
  const { slug } = useParams();
  const ministry = data[slug];
  return (
    <main className="flex-1">
      <div className="min-h-screen bg-white">
        {/* Hero Section with Overlay */}
        <section className="relative h-[90vh]  overflow-hidden">
          <img
            src={ministry.heroImage || "/placeholder.svg"}
            alt={ministry.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <Link
                  to={"/ministries"}
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 animate-fade-in"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Ministries
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in-left">
                  {ministry.title}
                </h1>
                <p
                  className="text-2xl md:text-3xl font-light mb-6 animate-slide-in-left"
                  style={{ animationDelay: "200ms" }}
                >
                  {ministry.subtitle}
                </p>
                <p
                  className="text-xl mb-8 text-white/90 animate-slide-in-left"
                  style={{ animationDelay: "400ms" }}
                >
                  {ministry.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" border-3 w-full py-16 md:py-20 bg-white border-b border-slate-100">
          <div className=" px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-sm font-bold text-white bg-primary/30  rounded-full mb-4">
                  Our Ministry
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {ministry.slogan}
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {ministry.experience}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {ministry?.activities?.map((res) => {
                      return (
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-2 h-2 ${
                              [
                                "bg-rose-500",
                                "bg-blue-500",
                                "bg-green-500",
                                "bg-purple-500",
                                "bg-yellow-500",
                                "bg-indigo-500",
                              ][Math.floor(Math.random() * 6)]
                            } rounded-full`}
                          ></div>
                          <span className="">
                            <>{res.title}</>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 border border-slate-200">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          Our Mission
                        </h3>
                        <p className="text-slate-600 italic">
                          {ministry.mission}
                        </p>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Ministry Focus Areas
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">
                              Spiritual Formation
                            </span>
                            <span className="text-rose-600 font-medium">
                              Core
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">
                              Community Building
                            </span>
                            <span className="text-amber-600 font-medium">
                              Essential
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">
                              Service & Outreach
                            </span>
                            <span className="text-blue-600 font-medium">
                              Active
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">
                              Leadership Training
                            </span>
                            <span className="text-green-600 font-medium">
                              Ongoing
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section with masonry layout */}
        <section className="w-full py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium text-amber-700 bg-amber-100 rounded-full mb-4">
                Our Community
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Ministry Gallery
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mb-6"></div>
              <p className="max-w-3xl text-slate-600 text-lg">
                {` Moments captured from our various ${ministry.title}, service
                projects, and gatherings.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {ministry?.images?.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl ${
                    item.span || ""
                  }`}
                >
                  <img
                    src={`${item.src}?height=${
                      item.height
                    }&width=500&text=Ministry+Photo+${index + 1}`}
                    alt={`Ministry activity ${index + 1}`}
                    width={500}
                    height={item.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-white/80 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {ministry?.images?.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl ${
                    item.span || ""
                  }`}
                >
                  <img
                    src={`/bg-5.jpg?height=${
                      item.height
                    }&width=500&text=Ministry+Photo+${index + 1}`}
                    alt={`Ministry activity ${index + 1}`}
                    width={500}
                    height={item.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-white/80 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Upcoming Events with calendar-style design */}
        <section className="  w-full py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                  Upcoming Events
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Youth Bible Study",
                  date: "Every Wednesday",
                  time: "6:30 PM - 8:00 PM",
                  location: "Main Sanctuary",
                  description:
                    "Weekly Bible study focused on applying God's word to everyday life.",
                  color: "bg-blue-500",
                },
                {
                  title: "Summer Camp Registration",
                  date: "May 1 - June 15",
                  time: "Online Registration",
                  location: "Church Website",
                  description:
                    "Register for our annual summer retreat with worship, outdoor activities, and fellowship.",
                  color: "bg-amber-500",
                },
                {
                  title: "Community Service Day",
                  date: "June 12",
                  time: "9:00 AM - 2:00 PM",
                  location: "City Park",
                  description:
                    "Join us as we serve our local community through various outreach projects.",
                  color: "bg-rose-500",
                },
                {
                  title: "Youth Worship Night",
                  date: "June 24",
                  time: "7:00 PM - 9:00 PM",
                  location: "Fellowship Hall",
                  description:
                    "An evening of praise, worship, and fellowship for all youth.",
                  color: "bg-purple-500",
                },
                {
                  title: "Parent-Youth Dinner",
                  date: "July 8",
                  time: "6:00 PM - 8:30 PM",
                  location: "Church Dining Hall",
                  description:
                    "Special dinner event for parents and youth to connect and celebrate together.",
                  color: "bg-green-500",
                },
                {
                  title: "Summer Camp",
                  date: "July 15 - July 20",
                  time: "All Day",
                  location: "Pine Ridge Retreat Center",
                  description:
                    "Our annual summer camp filled with worship, outdoor activities, and spiritual growth.",
                  color: "bg-amber-500",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200"
                >
                  <div className={`${event.color} p-4 text-white`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{event.date}</span>
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-rose-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-slate-500 mb-1">
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-slate-600 mb-4 flex-1">
                      {event.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-auto group"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
