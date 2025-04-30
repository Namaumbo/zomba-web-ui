"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, MapPin, Clock, Check, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/bg-4.jpg",
      title: "Welcome to Zomba Baptist Church",
      description: "To Serve and To Give",
      verses: "Mathew 20 v 28 & Mark 10 v 45",
    },
    {
      img: "/placeholder.svg?height=600&width=1200",
      title: "God Loves You",
      description:
        "At ZBC, We believe that God loves you and has a plan for your life.He gave his Son for You to be saved and have etrnal life",
      verses: "John 3 v 16",
    },
    {
      img: "/placeholder.svg?height=600&width=1200",
      title: "Be Jesus' Disciple with Others",
      description:
        "Join us in our journey of faith as we learn, worship, and fellowship with God Almighty and each other.",
      verses: "Mathew 28:18-20",
    },
  ];

  const upcomingEvents = [
    {
      title: "Sunday Worship",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for worship, prayer, and community",
    },
    {
      title: "God Loves You",
      date: "Every Wednesday",
      time: "6:30 PM",
      description: "Midweek study and fellowship for all ages",
    },
    {
      title: "Community Outreach",
      date: "March 15, 2025",
      time: "10:00 AM",
      description: "Serving our local community together",
    },
    {
      title: "Youth Group",
      date: "Every Friday",
      time: "7:00 PM",
      description: "Fun, fellowship, and faith for teens",
    },
  ];

  return (
    <div>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Slider */}
        <section className="relative">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}
            setApi={(api) => {
              api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
            }}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[80vh] w-full overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      fill
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                      {index === currentSlide ? (
                        <motion.div className="text-center text-white p-4 max-w-7xl">
                          <motion.h1
                            key={slide.title}
                            initial={{ opacity: 0, y: -70 }}
                            animate={{ opacity: [1], y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 font-heading"
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: [1], y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-lg md:text-xl max-w-4xl m-auto mb-3"
                          >
                            {slide.description}
                            <p className="text-lg md:text-xl">{slide.verses}</p>
                          </motion.p>
                        </motion.div>
                      ) : (
                        <div className="text-center text-white p-4 max-w-7xl opacity-0 pointer-events-none select-none">
                          <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 font-heading">
                            {slide.title}
                          </h1>
                          <p className="text-lg md:text-xl max-w-4xl m-auto mb-3">
                            {slide.description}
                          </p>
                          <p className="text-lg md:text-xl">{slide.verses}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Message from Pastor */}
        <section className="py-12 md:py-16 bg-white flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg order-2 lg:order-1">
                <img
                  src="/pastorPicture.jpg"
                  alt="Pastor David Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2 md:mt-10">
                <div className="  inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  A Message from Our Pastor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Hello in Jesus Name!
                </h2>
                <div className=" space-y-4 text-muted-foreground p-4 sm:p-6 bg-white rounded-smn shadow-sm mx-4 sm:mx-0">
                  <p>
                    " I am so excited to welcome you to our ZBC website. We are
                    looking forward to keep interacting with you. Our goal is to
                    keep you informed of what the Lord is doing through His
                    Church. Keep following us for what the Lord Almighty wants
                    to share with you through this website.
                  </p>
                  <p>
                    We believe that God has a purpose for each of us, and we're
                    excited to help you discover yours. I look forward to
                    meeting you personally this Sunday!
                  </p>
                  <p className="font-medium">
                    With blessings,"
                    <br />
                    <span className="block text-right italic font-semibold text-brand_color text-sm sm:text-base">
                      - Pastor Richard Makhenjera
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Identity & Purpose
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Who We Are & Our Mission
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Learn about our church community and how we're making a
                  difference.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Who Are We */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Church congregation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">
                        Who Are We?
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    We are a Christ-centred church growing in the Word of God.
                  </p>

                  <Button variant="link" className="p-0 h-auto mt-4">
                    Learn More About Us{" "}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* What is Our Mission */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Church mission"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">
                        What is Our Mission?
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Our mission is to{" "}
                    <span className="font-medium">
                      love God, love people, and make disciples
                    </span>{" "}
                    As a body of Christ, we let the Holy Spirit guide us to
                    serve God and others throughout the City of Zomba, the
                    District of Zomba, and beyond, fulfilling our calling as
                    described in Matthew 20:28, Matthew 28:18-20, and Acts 1:8.
                  </p>

                  <Button variant="link" className="p-0 h-auto mt-4">
                    Read Our Full Mission Statement{" "}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* How Do We Carry Out Our Mission */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Church outreach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">
                        How Do We Carry Out Our Mission?
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p>We are guided by the fruits of the Spirit:</p>

                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>
                        <span className="font-medium">Love • Joy • Peace</span>
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>
                        <span className="font-medium">
                          Patience • Kindness • Goodness
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>
                        <span className="font-medium">
                          Faithfulness • Gentleness • Self-control
                        </span>
                      </span>
                    </li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-2">
                    Explore Our Ministries
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button size="lg">Get Involved -{">"}</Button>
            </div>
          </div>
        </section>

        {/* Service Times & Location */}
        <section className="py-12 md:py-16  bg-white  flex flex-col justify-center  items-center">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Join Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Service Times & Location
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Sunday Services</h3>
                      <p className="text-muted-foreground">
                        9:00 AM - Chichewa Service
                      </p>
                      <p className="text-muted-foreground">
                        11:00 AM - International Service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Wednesday Night</h3>
                      <p className="text-muted-foreground">
                        6:30 PM - Bible Study & Youth Groups
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Our Location</h3>
                      <p className="text-muted-foreground">123 Faith Avenue</p>
                      <p className="text-muted-foreground">Anytown, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl mt-4 border border-[20px] bg-gradient-to-r from-primary/70 to-primary/40">
                <img
                  src="/inchurch.jpg"
                  alt="Church building"
                  fill
                  className="object-cover "
                />
              </div>
 
            </div>
          </div>
        </section>

        {/* Ministries */}
        <section className="py-12 md:py-16 bg-muted flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Get Involved
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Ministries
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  We offer a variety of ministries to help you connect, grow,
                  and serve.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/bg-5.jpg"
                  alt="Children's Ministry"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">
                    Children's Ministry
                  </h3>
                  <p className="text-white/80 mt-2">
                    Nurturing faith in our youngest members
                  </p>
                  <Button variant="link" className="p-0 text-white mt-2 w-fit">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/bg-5.jpg"
                  alt="Youth Ministry"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">
                    Youth Ministry
                  </h3>
                  <p className="text-white/80 mt-2">
                    Building strong foundations for teens
                  </p>
                  <Button variant="link" className="p-0 text-white mt-2 w-fit">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/bg-5.jpg"
                  alt="Adult Ministry"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">
                    Adult Ministry
                  </h3>
                  <p className="text-white/80 mt-2">
                    Growing together in faith and community
                  </p>
                  <Button variant="link" className="p-0 text-white mt-2 w-fit">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg">Explore All Ministries</Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                New Here? We'd Love to Meet You
              </h2>
              <p className="text-primary-foreground/90 md:text-lg">
                We invite you to join us this Sunday and experience the warmth
                and welcome of our church family. No matter where you are on
                your spiritual journey, there's a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button variant="secondary" size="lg">
                  Plan Your Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
