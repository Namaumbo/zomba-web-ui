"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Music,
  BookOpen,
  Heart,
  ChevronRight,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Expectations({ isServiceTimesInView }) {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const imageRef = React.useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const expectationItems = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Prayer",
      description:
        "Our greeters will welcome you at the door and help you find your way around. Stop by our Welcome Center for more information.",
    },
    {
      icon: <Music className="h-5 w-5" />,
      title: "Children’s Time,",
      description:
        "We begin with about 20 minutes of music led by our worship team. The words are projected on screens so you can sing along.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Praise and Worship",
      description:
        "Our pastor delivers a relevant, Bible-based message that applies to everyday life. Messages typically last 30-35 minutes.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Prayer",
      description:
        "We value connection. After the service, join us for coffee and conversation in our Fellowship Hall.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Sermon",
      description:
        "We value connection. After the service, join us for coffee and conversation in our Fellowship Hall.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Offering",
      description:
        "We value connection. After the service, join us for coffee and conversation in our Fellowship Hall.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Benediction",
      description:
        "We value connection. After the service, join us for coffee and conversation in our Fellowship Hall.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="mx-auto container px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="space-y-3" variants={itemVariants}>
            <motion.div
              className=" flex gap-2 justify-center items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <UserRound />
              For Visitors
            </motion.div>
            <motion.h2 className=" text-[#1D3557] text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-slate-100">
              Regular Order of Service
            </motion.h2>
            <motion.div
              className="h-1 w-20 rounded-full bg-primary/50 mx-auto"
              initial={{ width: 0 }}
              animate={isServiceTimesInView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>
          <div className="absolute -top-3 -z-10 h-72 w-72 bg-primary/17 blur-3xl lg:top-[-10%] lg:right-[20%]"></div>
        </motion.div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            className="relative h-[450px] overflow-hidden rounded-lg shadow-md order-2 md:order-1"
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            {/* Image overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
              initial={{ opacity: 0 }}
              animate={isImageInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            ></motion.div>

            {/* Image */}
            <motion.img
              src="/congregation1.jpg"
              alt="Church service"
              className="w-full h-full object-cover shadow-4xl shadow-black/20"
              initial={{ scale: 1 }}
              animate={isImageInView ? { scale: 1.03 } : { scale: 1 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            {/* Image caption */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 z-20"
              initial={{ y: 10, opacity: 0 }}
              animate={
                isImageInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
              }
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-white text-xl font-medium">Join Us.</h3>
              <p className="text-white/80 text-sm mt-1">
                Experience the warmth of our community
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-5 order-1 md:order-2">
            {expectationItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ x: 2 }}
                className="bg-white dark:bg-slate-800/50 rounded-lg p-5 shadow-sm border border-slate-100 dark:border-slate-700/50"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
