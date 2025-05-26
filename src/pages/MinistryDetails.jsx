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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Overlay */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={ministry.heroImage || "/placeholder.svg"}
          alt={ministry.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <Link
                href="/ministries"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 animate-fade-in"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Ministries
              </Link>
              <Badge className="mb-4 bg-purple-600 text-white hover:bg-purple-700 animate-fade-in-delay">
                {ministry.category}
              </Badge>
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
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Join This Ministry
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-gray-900"
                >
                  Contact Leader
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {ministry.memberCount}
              </h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ministry.meetingTime}
              </h3>
              <p className="text-gray-600">Meeting Time</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ministry.location}
              </h3>
              <p className="text-gray-600">Location</p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ministry.ageGroup}
              </h3>
              <p className="text-gray-600">Age Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4 max-w-4xl mx-auto animate-fade-in">
            "{ministry.verse}"
          </blockquote>
          <cite className="text-lg opacity-90 animate-fade-in-delay">
            — {ministry.verseReference}
          </cite>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Discover the meaningful ways we serve, grow, and make a difference
              in our community through various activities and programs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ministry.activities.map((activity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4">{activity.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leader Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 animate-scale-in">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt={ministry.leader}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 animate-slide-in-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meet Our Leader
                </h2>
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                  {ministry.leader}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {ministry.leaderBio}
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  {/* Contact {ministry.leader.split(" ")[0]} */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Join us for these exciting upcoming events and activities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ministry.upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                    <Calendar className="w-8 h-8 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-purple-100">{event.date}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              What People Say
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              Hear from our ministry members about their experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ministry?.testimonials?.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 italic mb-4 text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Ministry Gallery
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-delay">
              See our ministry in action through these memorable moments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministry.images.map((img, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${ministry.title} gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-delay">
            Ready to Join {ministry.title}?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-delay-2">
            Take the next step in your faith journey and become part of our
            ministry family. We'd love to have you join us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button size="lg" variant="secondary" className="text-purple-600">
              Get More Information
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600"
            >
              Contact Ministry Leader
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(ministries).map((slug) => ({
    slug,
  }));
}
