import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Calendar, ChevronRight } from "lucide-react";
import React from "react";
import { Heart, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import ServiceInfo from "../components/service-info";

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
  headerTitle:
    "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
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

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // const fadeIn = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6 },
  //   },
  // };

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

  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const serviceInView = useInView(serviceRef, { once: true, amount: 0.3 });

  return (
    <>
      <main className=" relative z-10  ">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-5 ">
          <div className={`${styles.grid} px-4 sm:px-8 mx-auto container`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.content}
            >
              <div className="inline-block rounded-2xl bg-primary/10 px-3 py-1 text-sm text-primary mb-[1rem]">
                About Our Church
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.titleAccent} />
                <h1 className={styles.title}> A Community of Faith and Love</h1>
              </div>
              <p className={styles.description}>
                Zomba Baptist Church exists to share the transformative love of
                Christ with our community and beyond. Over 500 active members in
                our vibrant community. Diverse congregation united in faith and
                worship, Led by dedicated pastoral leadership, Inclusive
                membership structure comprising: Senior Pastor-{">"} Full
                Members -{">"}Associate Members
              </p>
              <div className={styles.glow}></div>
            </motion.div>
            <div className="sm:py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.imageContainer}
              >
                <motion.img
                  src="/inchurch.jpg"
                  alt="Church worship service"
                  className={styles.image}
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
                  <span className="text-2xl font-bold">
                    Serving our community since 1990
                  </span>
                </div>
                <div className={styles.pattern} />
                <div className={styles.spotlight} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]"
                >
                  <span className=" text-sm font-medium text-primary">
                    Join us every Sunday
                  </span>
                  <br />
                  <span className="text-lg font-bold">9:00 AM & 11:00 AM</span>
                </motion.div>
              </motion.div>
              
            </div>
            
          </div>
        </section>

        {/* Our History & Leadership Section */}
        <section className="relative py-24 mt-8 overflow-hidden bg-gradient-to-b from-primary/70 to-primary/5">
          <div className="container relative px-4 mx-auto">
            <Tabs defaultValue="history" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-16"
              >
                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-primary/10">
                  <TabsTrigger
                    value="history"
                    className="text-base font-medium"
                  >
                    Our History
                  </TabsTrigger>
                  <TabsTrigger
                    value="leadership"
                    className="text-base font-medium"
                  >
                    Leadership
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="history" className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text">
                    Our Journey of Faith
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Zomba Baptist Church has been serving our community for over
                    30 years, growing from a small gathering to a vibrant
                    congregation.
                  </p>
                </motion.div>

                <div ref={timelineRef} className="relative">
                  {/* Timeline line with animated drawing effect */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={
                      timelineInView ? { height: "100%" } : { height: 0 }
                    }
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/50 rounded-full"
                  />

                  <motion.div
                    initial="hidden"
                    animate={timelineInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="space-y-24"
                  >
                    <TimelineItem
                      year="1990"
                      title="Our Founding"
                      description="Zomba Baptist Church was founded by a small group of families committed to establishing a welcoming place of worship in our community."
                      isLeft={true}
                    />

                    <TimelineItem
                      year="2005"
                      title="Building Expansion"
                      description="As our congregation grew, we expanded our facilities to include a larger sanctuary, educational wing, and community center."
                      isLeft={false}
                    />

                    <TimelineItem
                      year="2020"
                      title="Community Outreach"
                      description="We launched several new outreach programs to better serve our local community and expanded our global missions work."
                      isLeft={true}
                    />
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-6  bg-clip-text ">
                    Our Leadership Team
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Meet the dedicated individuals who guide our church
                    community with wisdom and compassion.
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                  className="grid gap-10 md:grid-cols-3"
                >
                  <LeadershipCard
                    name="Pastor David Johnson"
                    role="Senior Pastor"
                    description="Pastor David has been leading our church for over 15 years with wisdom and compassion."
                    imageUrl="/placeholder.svg?height=400&width=400"
                  />

                  <LeadershipCard
                    name="Sarah Williams"
                    role="Worship Director"
                    description="Sarah leads our worship ministry with passion and creativity."
                    imageUrl="/placeholder.svg?height=400&width=400"
                  />

                  <LeadershipCard
                    name="Michael Chen"
                    role="Youth Pastor"
                    description="Michael brings energy and insight to our thriving youth ministry."
                    imageUrl="/placeholder.svg?height=400&width=400"
                  />
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Values
                </div>
                <h2 className={styles.headerTitle}>What We Stand For</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  These core values guide everything we do as a church
                  community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid  gap-6 py-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 ">
                  <div className=" mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Love</h3>
                  <p className="text-muted-foreground">
                    We believe in showing Christ&apos;s love to everyone,
                    regardless of background or circumstance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Faith</h3>
                  <p className="text-muted-foreground">
                    We are committed to growing in our faith through worship,
                    prayer, and studying God&apos;s Word.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 ">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    We foster authentic relationships and support one another
                    through life&apos;s journey.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="group relative overflow-hidden rounded-full px-6 py-6 text-base font-medium transition-all hover:shadow-lg">
                        <span className="relative z-10">Contact Us</span>
                        <span className="absolute inset-0  opacity-100 transition-opacity"></span>
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

        <section className="py-12 md:py-16 bg-primary text-primary-foreground flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Come Grow With Us
              </h2>
              <p className="text-primary-foreground/90 md:text-lg">
                We invite you to join us this Sunday and experience the warmth
                and welcome of our church family. No matter where you are on
                your spiritual journey, there&apos;s a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button variant="secondary">Plan Your Visit</Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
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
  }

  return (
    <motion.div variants={itemVariants} className={`flex items-center ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-1/2 ${isLeft ? "pl-8 text-right" : "pr-8"}`}>
        <div className="space-y-2">
          <div className="text-primary font-bold text-xl">{year}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-primary z-10"></div>
      </div>

      <div className="w-1/2"></div>
    </motion.div>
  )
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
      className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="relative h-40 w-40 overflow-hidden rounded-full mb-6 border-4 border-primary/10">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
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
