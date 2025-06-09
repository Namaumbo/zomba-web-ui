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
  console.log(ministry);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Overlay */}
      <section className="relative h-[70vh]  overflow-hidden">
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
                href="/ministries"
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
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Join This Ministry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      {/* <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4 max-w-4xl mx-auto animate-fade-in">
            "{ministry.verse}"
          </blockquote>
          <cite className="text-lg opacity-90 animate-fade-in-delay">
            — {ministry.verseReference}
          </cite>
        </div>
      </section> */}

      {/* What We Do Section */}
      {/* <section className="py-20">
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
      </section> */}

      {/* Ministry Leader Section */}
      {/* <section className="py-16 bg-gray-50">
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
      {/* </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section className="py-20">
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
      </section> */}

      {/* Photo Gallery */}
      {/* <section className="py-20">
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
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-delay">
            Ready to Join {ministry.title}?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-delay-2">
            Take the next step in your faith journey and become part of our
            ministry family. We'd love to have you join us!
          </p>
        </div>
      </section> */}

      <main className="  bg-blue-800 flex-1 pt-20">
        <section className="w-full py-16 md:py-20 bg-white border-b border-slate-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-sm font-medium text-slate-700 bg-slate-100 rounded-full mb-4">
                  Our Ministry
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Empowering the Next Generation
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mx-auto mb-6"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Grace Community Church Youth Ministry has been a cornerstone
                    of spiritual development for young people ages 12-18 in our
                    community for over a decade. We are committed to creating an
                    environment where teenagers can explore their faith, ask
                    meaningful questions, and develop lasting relationships with
                    both God and their peers.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our ministry operates on the foundation of biblical truth,
                    authentic community, and practical application. We believe
                    that every young person has unique gifts and a divine
                    purpose, and we're here to help them discover and develop
                    both through engaging programs, mentorship opportunities,
                    and hands-on service experiences.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">
                        Weekly Bible Studies
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">
                        Community Service
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">
                        Leadership Development
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">
                        Mentorship Programs
                      </span>
                    </div>
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
                          "To guide young hearts in discovering their identity
                          in Christ, building authentic community, and equipping
                          them to make a positive impact in the world."
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
        {/* Hero Section with background image and overlay */}
        <section className="  relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=1080&width=1920&text=Church+Background"
              alt="Church background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-20 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  Welcome to Our Ministry
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                  <span className="block">Guiding Hearts</span>
                  <span className="block mt-1 text-rose-400">
                    Growing in Faith
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 text-lg md:text-xl">
                  Our youth ministry is dedicated to nurturing spiritual growth,
                  building community, and inspiring the next generation of
                  faithful leaders.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button className="h-12 px-6 bg-rose-600 hover:bg-rose-700 text-white text-base">
                  Join Our Community
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* About Section with cards */}
        <section className="mx-auto w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium text-rose-700 bg-rose-100 rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                About Our Ministry
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mb-6"></div>
              <p className="max-w-3xl text-slate-600 text-lg">
                We are dedicated to nurturing the spiritual growth of young
                people in our community through worship, fellowship, education,
                and service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Spiritual Growth",
                  description:
                    "We provide Bible studies, prayer groups, and mentorship to help youth deepen their relationship with God.",
                  icon: (
                    <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                      <Heart className="h-7 w-7 text-rose-600" />
                    </div>
                  ),
                },
                {
                  title: "Community Building",
                  description:
                    "Through regular gatherings, retreats, and social events, we foster meaningful connections among our youth.",
                  icon: (
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                      <svg
                        className="h-7 w-7 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Service & Outreach",
                  description:
                    "We engage in local and global service projects that allow youth to put their faith into action.",
                  icon: (
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                      <svg
                        className="h-7 w-7 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  {item.icon}
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Button variant="outline" className="group">
                Learn more about our approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section with masonry layout */}
        <section className="w-full py-20 md:py-28 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium text-amber-700 bg-amber-100 rounded-full mb-4">
                Our Community
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Ministry Gallery
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mb-6"></div>
              <p className="max-w-3xl text-slate-600 text-lg">
                Moments captured from our various youth activities, service
                projects, and gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {[
                { height: 300, span: "lg:row-span-2" },
                { height: 200 },
                { height: 250 },
                { height: 350, span: "lg:col-span-2" },
                { height: 200 },
                { height: 300 },
              ].map((item, index) => (
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
                      <h3 className="font-bold text-xl">Youth Activity</h3>
                      <p className="text-white/80 mt-2">
                        Building community through faith and fellowship
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                What Our Youth Say
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  quote:
                    "Being part of this ministry has transformed my faith journey and given me lifelong friends who support me.",
                  name: "Sarah Johnson",
                  role: "Youth Member, 4 Years",
                },
                {
                  quote:
                    "The mentorship I've received has helped me navigate difficult decisions and grow stronger in my relationship with God.",
                  name: "Michael Chen",
                  role: "Youth Leader",
                },
                {
                  quote:
                    "Our service projects have opened my eyes to the needs in our community and how we can make a real difference.",
                  name: "Olivia Martinez",
                  role: "Youth Member, 2 Years",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md border border-slate-100"
                >
                  <svg
                    className="h-8 w-8 text-amber-500 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-slate-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                      <span className="text-slate-600 font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events with calendar-style design */}
        <section className="w-full py-20 md:py-28 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-rose-700 bg-rose-100 rounded-full mb-4">
                  Join Us
                </span>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                  Upcoming Events
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full"></div>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 group">
                View Full Calendar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
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

        {/* Call to Action with background image */}
        <section className="relative w-full py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg?height=800&width=1920&text=Church+Community"
              alt="Church community"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full mb-4">
                Get Involved
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Youth Ministry Today
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                We welcome all young people to be part of our vibrant community.
                Come grow with us in faith, fellowship, and service to others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="h-12 px-8 bg-white text-slate-900 hover:bg-white/90">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Stay Connected
                </h2>
                <p className="text-slate-600">
                  Subscribe to our newsletter to receive updates on events,
                  announcements, and inspirational content.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
                <Button className="h-12 px-6 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white border-0">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
