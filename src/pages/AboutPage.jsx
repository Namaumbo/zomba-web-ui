"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import {
  Heart,
  FileText,
  Zap,
  Users,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  HeartHandshake,
  InfoIcon,
} from "lucide-react";

import { useEffect, useRef } from "react";
import { useParallax } from "../hooks/use-parallax";
import Timeline from "../components/timeline";
const styles = {
  section:
    "relative bg-gradient-to-b from-gray-50 pt-20 to-white min-h-[calc(100dvh-5rem)] flex items-center",
  container: "",
  grid: "grid lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-16 lg:items-start",
  content:
    "relative z-10 items-center lg:h-full lg:justify-center lg:items-start flex flex-col space-y-8",
  titleWrapper: "relative",
  title:
    "text-4xl text-center lg:text-left font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-6xl",
  titleAccent:
    "absolute -left-4 top-1/2 h-16 w-1 -translate-y-1/2 bg-gradient-to-b from-primary to-primary/50",
  description:
    "text-lg text-center lg:text-left leading-8 text-gray-600 [text-wrap:pretty]",
  imageContainer: "relative overflow-hidden lg:ml-auto rounded-3xl",
  image: "aspect-[5/3] w-full rounded-3xl object-cover shadow-2xl ",
  pattern:
    "absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40",
  glow: "absolute -top-3 -z-10 h-72 w-72 bg-primary/17 blur-3xl lg:top-[-10%] lg:right-[20%]",
  spotlight: "absolute right-0 top-0 -z-10 h-96 w-96 bg-primary/5 blur-3xl",
  headerTitle: "mt-4 text-3xl font-bold tracking-tight  sm:text-4xl ",
};

function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  };

  // Animation variants for Beany section
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const blobVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const serviceRef = useRef(null);

  // Animation controls for Beany section
  const controls = useAnimation();
  const [beanyRef, beanyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (beanyInView) {
      controls.start("visible");
    }
  }, [controls, beanyInView]);

  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.3 });

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
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const imageRef = useRef(null);
  const { handleScroll } = useParallax(imageRef, 0.6); // 0.4 is the parallax speed factor

  useEffect(() => {
    document.title = "About | Zomba Baptist Church";

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <main className="relative z-10">
        {/* Beany About Section */}
        <div className="min-h-screen  ">
          <div className="max-w-7xl mx-auto px-4 py-16 relative">
            {/* Small accent bubble */}
            <motion.div
              className="absolute bottom-20 right-32 w-[80px] h-[80px] bg-[#6d26c4ad] opacity-25 -z-10"
              style={{
                borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.4,
                scale: [1, 1.1, 1],
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                scale: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Header section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.div
                className=" mb-5 inline-flex items-center  rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200"
                whileHover={{ scale: 1.03 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              > 
                <InfoIcon className="w-4 h-4 mr-1" />
                About us
              </motion.div>
              <motion.h1
                variants={scaleIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D3557] mb-6"
              >
                About <span className="text-primary">Zomba </span>Baptist Church
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="max-w-3xl mx-auto text-lg text-[#1D3557]/80"
              >
                We are a Jesus-centered church committed to sharing God's love
                and grace. Founded in 1979, we have grown into a vibrant
                community of believers dedicated to faith, hope, and love in
                Jesus Christ.
              </motion.p>
            </motion.div>

            {/* Story section with image */}
            <motion.div
              ref={beanyRef}
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="grid md:grid-cols-2 gap-8 items-center mb-20"
            >
              {/* Image with blob background */}
              <motion.div className="relative">
                <motion.div
                  variants={blobVariants}
                  className="absolute inset-0 bg-primary/40 rounded-[40%_10%_70%_30%/40%_50%_60%_50%] -z-10"
                />
                <motion.div variants={scaleIn} className="relative z-10 mt-4">
                  <div className="rounded-full overflow-hidden border-4 border-white shadow-xl w-[350px] h-[350px] mx-auto">
                    <img
                      src="/inchurch.jpg"
                      alt="Sue de Bievre, Beany Founder"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <motion.p
                    variants={fadeIn}
                    className="text-center mt-4 font-medium bg-white max-w-fit mx-auto p-2 rounded-lg"
                  >
                    Zomba Baptist church
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Story text */}
              <motion.div variants={staggerChildren}>
                <motion.div variants={fadeIn} className="mb-4">
                  <p className="text-primary font-semibold">
                    1979 TILL INFINITY
                  </p>
                  <h2 className="text-3xl font-bold text-[#1D3557] mb-4">
                    The ZBC Story
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute -top-[-40]  w-76 h-66 bg-purple-300 rounded-full blur-2xl !z-[-1]"
                />
                <motion.div
                  variants={fadeIn}
                  className="prose prose-lg text-[#1D3557]/90  !z-1"
                >
                  <p>
                    Zomba Baptist Church exists to share the transformative love
                    of Christ with our community and beyond. Over 500 active
                    members in our vibrant community.
                  </p>
                  <p>
                    Diverse congregation united in faith and worship, Led by
                    dedicated pastoral leadership, Inclusive membership
                    structure comprising:
                  </p>
                  <br />

                  <p>
                    Regenerate Church Membership: We hold that to become a
                    Christian requires a personal acknowledgment of Jesus Christ
                    as Saviour and Lord, which results in the person being
                    born-again.
                  </p>
                  <br />
                  <p>
                    Baptism: We further hold that the Christian’s act of faith
                    is followed by the believer's baptism by immersion, which
                    must precede full membership in the local Church, as first
                    significant act through which the believer proclaims
                    personal faith in Christ and is initiated into Church life
                    and ministry.
                  </p>

                  <br />
                  <p>
                    Members of Zomba Baptist Church: The Pastor or Pastors of
                    Zomba Baptist Church; All full members of Zomba Baptist
                    Church; and All associate members of Zomba Baptist Church
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {[
                {
                  number: "590",
                  text: "members",
                  custom: 0,
                },
                {
                  number: "10",
                  text: "Ministries",
                  custom: 1,
                },
                {
                  number: "34+",
                  text: "Impact",
                  custom: 2,
                },
                {
                  number: "9",
                  text: "Satellite Churches",
                  custom: 3,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={stat.custom}
                  variants={statVariants}
                  className="flex flex-col items-center"
                >
                  <motion.h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557] mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: stat.custom * 0.2 + 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-[#1D3557]/70 font-medium">
                    {stat.text} <span className="text-xl">{stat.emoji}</span>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Our History & Leadership Section */}
        <section className="relative py-24 bg-primary/70 ">
          <div className="container relative px-4 mx-auto">
            <Tabs defaultValue="history" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-16"
              >
                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-primary/80">
                  <TabsTrigger
                    value="history"
                    className="text-base font-medium text-white"
                  >
                    Our History
                  </TabsTrigger>
                  <TabsTrigger
                    value="leadership"
                    className="text-base font-medium text-white"
                  >
                    Leadership
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="history" className="space-y-16">
                <div ref={timelineRef} className="relative">
                  <motion.div
                    initial="hidden"
                    animate={timelineInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="space-y-24"
                  >
                    <Timeline />
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="leadership" className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-6  bg-clip-text  text-white">
                    Our Leadership Team
                  </h2>
                  <p className="text-lg text-white">
                    Meet the dedicated individuals who guide our church
                    community with wisdom and compassion.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  <div className="w-fit mx-auto max-w-[400px]">
                    <LeadershipCard
                      name="Pastor Richard Makhenjera"
                      role="Resident Pastor"
                      description="Pastor Makhenjera has been leading our church for over 15 years with wisdom and compassion."
                      imageUrl="/pastor.jpg"
                    />
                  </div>
                  <div className="grid gap-8 md:grid-cols-4 mx-auto ">
                    <LeadershipCard
                      name="Mr Kambalamae"
                      role="Church Administrator"
                      description="Oversees Church in activities"
                      imageUrl="/kambalame-1.jpg"
                    />
                    <LeadershipCard
                      name="Mr Kelvin Mopiha"
                      role="Church Secretary"
                      description="Leading with grace and wisdom"
                      imageUrl="/mopiha.jpeg"
                    />
                    <LeadershipCard
                      name="Madalitso Mgunda"
                      role="Treasurer"
                      description="Appointed Treasurer for ZBC"
                      imageUrl="/tresuere.jpeg"
                    />
                    <LeadershipCard
                      name="Garton Kamchedzera"
                      role="Chief Elder"
                      description="Prof. Kamchedzera is the appointed chief elder for ZBC"
                      imageUrl="/Kamchedzera.jpeg"
                    />
                  </div>
                  <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
                    <LeadershipCard
                      name="Laston Simenti"
                      role="Chief Deacon"
                      description="Appointed to lead the deacons"
                      imageUrl="/placeholder.svg?height=400&width=400"
                    />
                    <LeadershipCard
                      name="Mrs Chrissy Kubwalo"
                      role="Vice Chief Deacon"
                      description=""
                      imageUrl="/chrissy.jpeg"
                    />
                    <LeadershipCard
                      name="Mrs Sakina Katunga"
                      role="Vice Chief Deacon"
                      description=""
                      imageUrl="/Sakina.jpeg"
                    />
                    <LeadershipCard
                      name="Mr Kelvin Gunya"
                      role="Church Elder"
                      description="Serving with dedication and commitment"
                      imageUrl="/gunya.jpeg"
                    />
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-10 md:py-16 flex flex-col items-center justify-center mx-auto max-w-7xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center  text-center">
              <div className="">
                <h2 className={`${styles.headerTitle} text-[#1D3557]`}>
                  What We Stand For
                </h2>
              </div>
            </div>
            <main className="flex-grow py-12 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {/* Identity Card */}
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                    variants={item}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <FileText className="text-purple-700 h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold ml-3 text-purple-900">
                        Identity
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We are a Christ-centred church growing in the Word of God.
                    </p>
                  </motion.div>

                  {/* Mission Card */}
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                    variants={item}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Zap className="text-purple-700 h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold ml-3 text-purple-900">
                        Our Mission
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      As a body of Christ, we let the Holy Spirit to make us
                      give and serve God and other people in the City of Zomba,
                      the District of Zomba, and beyond.
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      (Matthew 20:28, Matthew 28:18-20, and Acts 1:8)
                    </p>
                  </motion.div>

                  {/* Values Card */}
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                    variants={item}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Heart className="text-purple-700 h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold ml-3 text-purple-900">
                        Our Values
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Love, joy, peace, patience, kindness, goodness,
                      faithfulness, gentleness, and self-control
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      (Galatians 5:22-23)
                    </p>
                  </motion.div>

                  {/* Association Card */}
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                    variants={item}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Users className="text-purple-700 h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold ml-3 text-purple-900">
                        Our Association
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ZBC is a member of the Baptist Convention of Malawi
                      (BACOMA) and further closely works with:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Mtendere Baptist Church</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Heidelberg Baptist Church (Germany)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>UBIA Ministries (United States of America)</span>
                      </li>
                    </ul>
                    <Link to={"/about/association"} asChild>
                      <motion.button
                        className="mt-6 text-purple-700 font-medium flex items-center hover:text-purple-900 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        READ MORE <ChevronRight className="h-4 w-4 ml-1" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </main>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                ref={ref}
                className="relative overflow-hidden rounded-xl border bg-gradient-to-b from-white to-slate-50 p-8 shadow-lg dark:from-slate-950 dark:to-slate-900"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5"
                  variants={decorationVariants}
                  animate={isInView ? "visible" : "hidden"}
                  initial="hidden"
                ></motion.div>
                <motion.div
                  className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/5"
                  variants={decorationVariants}
                  animate={isInView ? "visible" : "hidden"}
                  initial="hidden"
                ></motion.div>

                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <motion.div className="space-y-3" variants={itemVariants}>
                    <motion.div
                      className="inline-flex items-center  rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200"
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <HeartHandshake className="w-4 h-4 mr-1" />
                      Our Identity & Purpose
                    </motion.div>
                    <motion.h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                      Service Times & Location
                    </motion.h2>
                    <motion.div
                      className="h-1 w-20 rounded-full bg-primary/70"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 80 } : { width: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    ></motion.div>
                  </motion.div>

                  {/* Service times */}
                  <div className="space-y-5">
                    <motion.div
                      className="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/90 shadow-md shadow-primary/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        variants={pulseVariants}
                        animate="animate"
                      >
                        <Calendar className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          Sunday Services
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                          9:00 AM - International Service
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                          11:00 AM - Chichewa Service
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.15 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="absolute -bottom-5  w-76 h-66 bg-purple-500 rounded-full blur-2xl z-[-1]"
                    />
                    <motion.div
                      className="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/90 shadow-md shadow-primary/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        variants={pulseVariants}
                        animate="animate"
                        transition={{ delay: 0.4 }}
                      >
                        <MapPin className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          Our Location
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                          Standard Bank, which is along M3 Road
                        </p>
                        <p className="text-slate-600 dark:text-slate-300"></p>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="pt-4"
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.div>
                      <Link to={"/contact"}>
                        <Button className="group relative overflow-hidden rounded-full px-6 py-6 text-base font-medium ">
                          <span className="relative z-10">Contact Us</span>
                          <span className="absolute inset-0  opacity-100 transition-opacity"></span>
                          <motion.span initial={{ x: 0 }}>
                            <ChevronRight className="relative z-10 ml-2 h-4 w-4 inline-block" />
                          </motion.span>
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl flex-3/4"
              >
                <div className="relative overflow-hidden rounded-xl flex-3/4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.809933638927!2d35.32057426530683!3d-15.385905218177017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904bedc35d9a7%3A0x7e8ed903188523b7!2sZomba%20Baptist%20Church!5e0!3m2!1sen!2smw!4v1746456701614!5m2!1sen!2smw"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-primary text-primary-foreground overflow-hidden">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Come Grow With Us
                </h2>
                <p className="text-primary-foreground/90 md:text-lg">
                  Join us here and physically and let us be together in Christ,
                  no matter where yo are in your spiritual journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-4">
                  <Link to={"/gallery"}>
                    <Button variant="secondary">
                      Our Church In Pictures -{">"}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    ref={imageRef}
                    src="/kids.jpg"
                    alt="Church community"
                    className="w-full h-[140%] shadow-2xl object-cover"
                    style={{
                      transform: "translateY(0)",
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function TimelineItem({ year, title, description, isLeft }) {
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`flex items-center ${
        isLeft ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`w-1/2 ${isLeft ? "pl-8 text-right" : "pr-8"}`}>
        <div className="space-y-2">
          <div className="text-primary font-bold text-xl">{year}</div>
          <h3 className="text-2xl font-bold text-white ">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-primary z-10"></div>
      </div>

      <div className="w-1/2"></div>
    </motion.div>
  );
}

// Component for leadership cards
function LeadershipCard({ name, role, description, imageUrl }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow mb-5"
    >
      <div className="relative h-80 w-80 overflow-hidden rounded-lg mb-6 border-4 border-primary/10">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full object-top"
        />
      </div>
      <h3 className="text-xl font-bold text-[#1D3557]">{name}</h3>
      <p className="text-primary font-medium mt-1">{role}</p>
      <p className="text-slate-600 mt-4">{description}</p>
    </motion.div>
  );
}

// Component for value cards
function ValueCard({ icon, title, description }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-slate-600 flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Component for service info items
function ServiceInfoItem({ icon, title, items }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary shadow-md">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        {items.map((item, index) => (
          <p key={index} className="text-slate-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
