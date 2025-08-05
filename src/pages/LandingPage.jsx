"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, HeartHandshakeIcon } from "lucide-react";
import HeroCarousel from "../components/hero-carousel";
import PastorSection from "../components/pastor-message";
import MissionSection from "../components/mission-section";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Home | Zomba Baptist Church";
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

  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Hero Slider */}
        <HeroCarousel />

        {/* Message from Pastor */}
        <PastorSection />

        {/* Our Mission */}
        <MissionSection />

        {/* Service Times & Location */}
        <section className="relative container mx-auto py-16 md:py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <motion.div
            className="inline-flex items-center rounded-full border border-purple-200 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 text-sm font-semibold text-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <HeartHandshakeIcon className="w-5 h-5 mr-2" />
            Join us for worship
          </motion.div>

          <motion.h2
            className="text-center text-[#1D3557] text-4xl mb-12 font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Join us For{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Worship
            </span>
          </motion.h2>

          <div className="px-4 md:px-6 3xl:max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mb-8 rounded-full"
                  />

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  >
                    Sunday{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Worship
                    </span>{" "}
                    Services
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl text-gray-700 mb-10 leading-relaxed"
                  >
                    Worship the Lord your God and serve him Only.
                    <span className="block mt-2 italic text-purple-600 font-medium">
                      - Luke 4:8
                    </span>
                  </motion.p>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6 mb-10"
                  >
                    <motion.div
                      variants={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          International Service
                        </p>
                        <p className="text-gray-600">8:30 AM - 10:45 AM</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          Chichewa Service
                        </p>
                        <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced gradient blob */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
                  />
                </motion.div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50, rotate: -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  <motion.img
                    src="/inchurch.jpg"
                    alt="Church worship service"
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
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
                    className="absolute bottom-0 left-0 p-8 text-white z-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <motion.span
                      className="text-sm font-medium uppercase tracking-wider text-purple-200"
                      whileHover={{ letterSpacing: "0.1em" }}
                      transition={{ duration: 0.3 }}
                    >
                      Zomba Baptist Church
                    </motion.span>
                    <br />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.9 }}
                      className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 mt-3 rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Section */}
        <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 rounded-3xl" />
                <img
                  src="/prayer.jpg"
                  alt="Prayer session"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Enhanced animated dots pattern overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-0 right-0 z-20 p-8"
                >
                  <div className="grid grid-cols-12 gap-1">
                    {[...Array(144)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.005, duration: 0.3 }}
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex flex-col justify-center lg:p-12 relative">
                <div className="space-y-8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  />

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Corporate{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Prayer
                    </span>{" "}
                    Sessions
                  </h2>

                  {/* Enhanced gradient blob */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.08 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl z-[-1]"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-600 leading-relaxed"
                  >
                    Join us in our dedicated corporate prayer sessions where we
                    come together as a community to seek God's presence,
                    intercede for one another, and experience the power of
                    unified prayer.
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
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">
                        Wednesday, 16:00 to 17:00
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">
                        Last Friday of the month: Overnight from 20:00
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">
                        First Wednesday of the month: Prayer and fasting up to
                        17:00
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">
                        First Monday to Friday of every quarter: 5 days of
                        prayer and fasting
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full w-fit group transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                      Join Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Enhanced decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-tl-full rounded-bl-full opacity-20 blur-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>

          <div className="container px-4 md:px-6 text-center relative z-10">
            <motion.div
              className="mx-auto max-w-4xl space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to our community
              </motion.div>

              <motion.h2
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                New Here? We'd Love to{" "}
                <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Meet You
                </span>
              </motion.h2>

              <motion.p
                className="text-white/90 md:text-xl leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We invite you to join us this Sunday and experience the warmth
                and welcome of our church family. No matter where you are on
                your spiritual journey, there's a place for you here.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link to="services" asChild>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold px-8 py-4"
                  >
                    Plan Your Visit
                  </Button>
                </Link>
                <Link to="contact" asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 font-semibold px-8 py-4"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
