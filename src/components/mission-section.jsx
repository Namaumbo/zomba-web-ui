"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ChevronRight, ArrowRight, BadgeInfo } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export default function MissionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 0.7 } : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 1.5 }}
      />

      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className=" flex justify-center items-center gap-1 w-fit m-auto mb-5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BadgeInfo/>
              Our Identity & Purpose
            </motion.div>

            <h2 className="text-3xl font-bold text-[#1D3557] tracking-tighter sm:text-4xl md:text-5xl">
              Who We Are & Our Mission
            </h2>

            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              Learn about our church community and how we're making a
              difference.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Who Are We */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 mt-[-1.5rem]">
                <img
                  src="/WhatsApp Image 2025-01-27 at 17.21.17.jpeg"
                  alt="Church congregation"
                  className="object-cover w-full h-full"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end">
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-white">
                      Who Are We?
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  We are a Christ-centred church growing in the Word of God.
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="about" asChild>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-4 text-primary"
                    >
                      Learn More About Us
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What is Our Mission */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 mt-[-1.5rem]">
                <img
                  src="/mgonero.jpg"
                  alt="Church mission"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end">
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-white">
                      What is Our Mission?
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  Our mission is to{" "}
                  <span className="font-medium text-primary">
                    love God, love people, and make disciples.
                  </span>{" "}
                  As a body of Christ, we let the Holy Spirit guide us to serve
                  God and others throughout the City of Zomba, the District of
                  Zomba, and beyond, fulfilling our calling as described in
                  Matthew 20:28, Matthew 28:18-20, and Acts 1:8.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* How Do We Carry Out Our Mission */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 mt-[-1.5rem]">
                <img
                  src="/evanjelism.jpg"
                  alt="Church outreach"
                  className="object-cover w-full h-full rounde-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end">
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-white">
                      How Do We Carry Out Our Mission?
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-medium mb-3">
                  We are guided by the fruits of the Spirit:
                </p>

                <ul className="space-y-3 text-muted-foreground mb-6">
                  {[
                    "Love • Joy • Peace",
                    "Patience • Kindness • Goodness",
                    "Faithfulness • Gentleness • Self-control",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -5 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }
                      }
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    >
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="ministries">
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-2 text-primary"
                    >
                      Explore Our Ministries
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
