"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HeroCarousel from "../components/hero-carousel";
import PastorSection from "../components/pastor-message";
import MissionSection from "../components/mission-section";
import ServiceLocation from "../components/service-location";
import { motion, useInView } from "framer-motion";
import React from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Create refs and hooks for scroll animations
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return { ref, isInView };
  };

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
        <section className="container mx-auto py-12 md:py-16 bg-white flex flex-col justify-center items-center">
          <motion.div
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            Join Us
          </motion.div>
          <motion.h2
            className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join Us for Worship
          </motion.h2>
          <div className="px-4 md:px-6">
            <div className="grid gap-5 lg:grid-cols-2 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* <ServiceLocation /> */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-1 bg-purple-600 mb-6"
                  />
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  >
                    Sunday <span className="text-purple-500">Worship</span>{" "}
                    Services
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-700 mb-8 leading-relaxed"
                  >
                    We invite you to join us in worship and fellowship.
                    Experience the warmth of our community as we gather together
                    to praise God and grow in faith. "For where two or three
                    gather in my name, there am I with them."
                    <span className="italic text-purple-500 ">
                      - Matthew 18:20.
                    </span>
                  </motion.p>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4 mb-8"
                  >
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                      <p className="text-gray-700">Wednesday, 16:00 to 17:00</p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                      <p className="text-gray-700">
                        Last Friday of the month: Overnight from 20:00
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                      <p className="text-gray-700">
                        First Wednesday of the month: Prayer and fasting up to
                        17:00
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                      <p className="text-gray-700">
                        First Monday to Friday of every quarter: 5 days of
                        prayer and fasting
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Purple gradient blob */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute -bottom-32  w-96 h-96 bg-purple-600 rounded-full blur-2xl -z-10"
                  />
                </motion.div>
              </motion.div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  <motion.img
                    src="/inchurch.jpg"
                    alt="Church worship service"
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{
                      scale: [1.1, 1.05, 1.1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 p-6 text-white z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.span
                      className="text-sm font-medium uppercase tracking-wider"
                      whileHover={{ letterSpacing: "0.1em" }}
                      transition={{ duration: 0.3 }}
                    >
                      Zomba Baptist Church
                    </motion.span>
                    <br />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-0.5 bg-white/70 mt-2"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer*/}
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/30 z-10 rounded-2xl" />
                <img
                  src="/prayer.jpg"
                  alt="Prayer session"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Animated dots pattern overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-0 right-0 z-20 p-8"
                >
                  <div className="grid grid-cols-10 gap-2">
                    {[...Array(100)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.01, duration: 0.5 }}
                        className="w-2 h-2 rounded-full bg-purple-500"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-1 bg-purple-600 mb-6"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Corporate <span className="text-purple-500">Prayer</span>{" "}
                  Sessions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                >
                  Join us in our dedicated corporate prayer sessions where we
                  come together as a community to seek God's presence, intercede
                  for one another, and experience the power of unified prayer.
                </motion.p>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4 mb-8"
                >
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <p className="text-gray-700">Wednesday, 16:00 to 17:00</p>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <p className="text-gray-700">
                      Last Friday of the month: Overnight from 20:00
                    </p>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <p className="text-gray-700">
                      First Wednesday of the month: Prayer and fasting up to
                      17:00
                    </p>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <p className="text-gray-700">
                      First Monday to Friday of every quarter: 5 days of prayer
                      and fasting
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                    Join Us
                    <ChevronDown size={18} />
                  </button>
                </motion.div>

                {/* Purple gradient blob */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute -bottom-32  w-96 h-96 bg-purple-600 rounded-full blur-2xl -z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              className="mx-auto max-w-3xl space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                New Here? We'd Love to Meet You
              </motion.h2>
              <motion.p
                className="text-primary-foreground/90 md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We invite you to join us this Sunday and experience the warmth
                and welcome of our church family. No matter where you are on
                your spiritual journey, there's a place for you here.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="transition-transform hover:scale-105"
                >
                  Plan Your Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
