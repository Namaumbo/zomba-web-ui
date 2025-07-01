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
                <span className="inline-block px-3 py-1 text-sm font-bold text-white bg-primary  rounded-full mb-4">
                  Our Ministry
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {ministry.slogan}
                </h2>
                <div className="w-16 h-1 bg-primary/80  rounded-full mx-auto mb-6"></div>
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
                  {/* <img src={ministry?.image[1]} alt="" className="rounded-lg" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section with masonry layout */}
        <section className="w-full py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
            
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Ministry Gallery
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
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
      </div>
    </main>
  );
}
