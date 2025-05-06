"use client";

import { Clock, MapPin, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import React from "react";

export default function ServiceLocation() {
  // Animation variants
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

  // Ref for scroll into view detection
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
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
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Community
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
            className="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/90 shadow-md shadow-primary/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              variants={pulseVariants}
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <Clock className="h-6 w-6 text-white" />
            </motion.div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Wednesday Night
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                6:30 PM - Bible Study & Youth Groups
              </p>
            </div>
          </motion.div>

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
                Along M1 Road
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Anytown, ST 12345
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="pt-4"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div>
            <Button className="group relative overflow-hidden rounded-full px-6 py-6 text-base font-medium transition-all hover:shadow-lg active:bg-primary/60 ">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 opacity-100 transition-opacity"></span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ChevronRight className="relative z-10 ml-2 h-4 w-4 inline-block" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
  