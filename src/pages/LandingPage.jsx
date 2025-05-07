"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock, Check, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import HeroCarousel from "../components/hero-carousel";
import PastorSection from "../components/pastor-message";
import MissionSection from "../components/mission-section";
import ServiceLocation from "../components/service-location";
import { motion, useInView } from "framer-motion";

export default function LandingPage() {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroCarousel />
        {/* Message from Pastor */}
        <PastorSection />
        {/* Our Mission */}
        <MissionSection />

        {/* Service Times & Location */}
        <section className=" container mx-auto py-12 md:py-16  bg-white  flex flex-col justify-center  items-center">
          <motion.div
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Join Us
          </motion.div>
          <h2 className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Us for Worship
          </h2>
          <div className="px-4 md:px-6">
            <div className="grid gap-5 lg:grid-cols-2 items-center">
              <div className="space-y-4 ">
                <ServiceLocation />
              </div>

              <div className="sm:py-10">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative overflow-hidden lg:ml-auto rounded-3xl"
                >
                  <motion.img
                    src="/inchurch.jpg"
                    alt="Church worship service"
                    className="aspect-[5/3] w-full rounded-3xl object-cover shadow-2xl"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.09 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-sm font-medium uppercase tracking-wider">
                      Zomba Baptist Church
                    </span>
                    <br />
                  
                  </div>
                </motion.div>
              </div>            </div>
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
