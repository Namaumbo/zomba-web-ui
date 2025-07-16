"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Music,
  BookOpen,
  Users,
  Calendar,
  HelpCircle,
  MapPin,
  ChevronRight,
  HeartHandshakeIcon,
} from "lucide-react";
import Expectations from "../components/expectations";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/service-card.jsx";
import { Link } from "react-router-dom";
export default function ServicePage() {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const serviceTimesRef = useRef(null);
  const serviceElementsRef = useRef(null);
  const sermonsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Check if sections are in view
  const isServiceTimesInView = useInView(serviceTimesRef, {
    once: true,
    amount: 0.2,
  });
  const isServiceElementsInView = useInView(serviceElementsRef, {
    once: true,
    amount: 0.2,
  });
  const isSermonsInView = useInView(sermonsRef, { once: true, amount: 0.2 });

  // Parallax effect for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 100]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardHover = {
    rest: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
  };

  const upcomingSermons = [
    {
      title: "Finding Peace in Troubled Times",
      date: "March 17, 2025",
      scripture: "John 14:27",
      description:
        "Discovering God's peace that surpasses all understanding in the midst of life's challenges.",
    },
    {
      title: "The Power of Community",
      date: "March 24, 2025",
      scripture: "Acts 2:42-47",
      description:
        "Exploring how authentic Christian community can transform our lives and the world around us.",
    },
    {
      title: "Grace for the Journey",
      date: "March 31, 2025",
      scripture: "2 Corinthians 12:9",
      description:
        "Understanding how God's grace sustains us through every season of life.",
    },
  ];

  // State for active tab
  // const [activeTab, setActiveTab] = useState("Chichewa");

  useEffect(() => {
    document.title = "Service | Zomba Baptist Church";
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <motion.section className="relative" ref={heroRef}>
          <motion.div
            className="relative h-[300px] md:h-[400px] w-full overflow-hidden"
            style={{ scale: heroScale }}
          >
            <motion.img
              src="/inchurch.jpg"
              alt="Church worship service"
              className="object-cover w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
              style={{ opacity: heroOpacity, y: heroY }}
            >
              <motion.div
                className="text-center text-white p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Worship Services
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Join us as we gather to worship, learn, and grow together in
                  faith
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Service Times */}
        <section className="py-12 md:py-16 bg-white" ref={serviceTimesRef}>
          <div className="mx-auto container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
              initial="hidden"
              animate={isServiceTimesInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
                <motion.div
                  className=" flex gap-2 justify-center m-auto mb-5 max-w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HeartHandshakeIcon />
                  Join Us
                </motion.div>
                <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Service Times
                </motion.h2>
                <motion.div
                  className="h-1 w-20 rounded-full bg-primary/50 mx-auto"
                  initial={{ width: 0 }}
                  animate={isServiceTimesInView ? { width: 80 } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.p className="max-w-[700px] text-muted-foreground md:text-lg">
                  International, Chichewa, and Joint Services.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              animate={isServiceTimesInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <ServiceCard
                image="/inchurch.jpg"
                service="International Service"
                time="Sunday, 8:30"
                location="Main Church"
                description="A modern worship experience 
with our Praise Team, International music, prayer, and Bible-based 
sermons in English."
              />
              <ServiceCard
                image="/chichewa.jpeg"
                service="Chichewa Service"
                time="Sunday, 10:00"
                location="Main Church"
                description="Join us for a traditional worship service with 
hymns and a sermon” with “A modern worship, prayer, and Bible-based 
sermons in Chichewa."
              />
              <ServiceCard
                image="/bg-3.jpg"
                service="Joint Service"
                time="Wednesday, 6:30"
                location="Main Church"
                description="A modern 
worship, prayer, and Bible-based sermons in combined Chichewa and 
English."
              />

              <ServiceCard
                image="/bg-3.jpg"
                service="Special Services"
                time="Wednesday, 6:30"
                location="Main Church"
                description="Communion Service in Both 
International and Chichewa Services: Sharing of Holy Communion during 
the second Sunday of each month; Baptismal Service: Baptism in the third 
month of each quarter."
              />
            </motion.div>

            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isServiceTimesInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.6, duration: 0.5 }}
            ></motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <Expectations isServiceTimesInView={isServiceTimesInView} />

        {/* Service Elements */}
        {/* <section className="py-12 md:py-16 bg-white" ref={serviceElementsRef}>
          <div className="mx-auto container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
              initial="hidden"
              animate={isServiceElementsInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
                <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Worship
                </motion.div>
                <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Elements of Our Service
                </motion.h2>
                <motion.div
                  className="h-1 w-20 rounded-full bg-primary/50 mx-auto"
                  initial={{ width: 0 }}
                  animate={
                    isServiceElementsInView ? { width: 80 } : { width: 0 }
                  }
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Each service includes these key elements to create a
                  meaningful worship experience.
                </motion.p>
              </motion.div>
            </motion.div>

            <Tabs
              defaultValue="Chichewa"
              className="w-full"
              onValueChange={setActiveTab}
              value={activeTab}
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isServiceElementsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TabsList>
                  <TabsTrigger value="Chichewa">
                    <h3 className=""> Chichewa Service</h3>
                  </TabsTrigger>
                  <TabsTrigger value="International">
                    International Service
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="Chichewa" className="space-y-6">
                    <motion.div
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      {[
                        {
                          icon: <Music className="h-8 w-8 text-primary mb-4" />,
                          title: "Hymns & Choir",
                          description:
                            "Our Chichewa service features beloved hymns led by our choir and organ accompaniment.",
                        },
                        {
                          icon: (
                            <BookOpen className="h-8 w-8 text-primary mb-4" />
                          ),
                          title: "Scripture Reading",
                          description:
                            "We read from both the Old and New Testaments, following the church calendar.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                              <path d="M12 13v8" />
                              <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                            </svg>
                          ),
                          title: "Responsive Readings",
                          description:
                            "The congregation participates in responsive readings from the Psalms and liturgical texts.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                              <path d="M18 14h-8" />
                              <path d="M15 18h-5" />
                              <path d="M10 6h8v4h-8V6Z" />
                            </svg>
                          ),
                          title: "Sermon",
                          description:
                            "A thoughtful exposition of Scripture that connects ancient wisdom to International life.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M17 3a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M10.5 3a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M4 3a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M17 16a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M10.5 16a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M4 16a2.85 2.85 0 1 1 0 5.7" />
                              <path d="M4 9v7" />
                              <path d="M10.5 9v7" />
                              <path d="M17 9v7" />
                            </svg>
                          ),
                          title: "Communion",
                          description:
                            "We celebrate communion on the first Sunday of each month, open to all believers.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                              <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                              <path d="M16 11h0" />
                            </svg>
                          ),
                          title: "Benediction",
                          description:
                            "We close with a blessing that sends the congregation out to serve in the world.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <Card className="bg-muted/30 h-full">
                            <CardContent className="p-6">
                              <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {item.icon}
                              </motion.div>
                              <h3 className="text-xl font-bold mb-2">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="International" className="space-y-6">
                    <motion.div
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      {[
                        {
                          icon: <Music className="h-8 w-8 text-primary mb-4" />,
                          title: "Praise Band",
                          description:
                            "Our International service features modern worship music led by our praise band.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                            </svg>
                          ),
                          title: "Welcome & Announcements",
                          description:
                            "We begin with a warm welcome and brief announcements about church life.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                          ),
                          title: "Extended Worship",
                          description:
                            "We spend 25-30 minutes in worship through International music and prayer.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                              <path d="M18 14h-8" />
                              <path d="M15 18h-5" />
                              <path d="M10 6h8v4h-8V6Z" />
                            </svg>
                          ),
                          title: "Message",
                          description:
                            "A relevant, engaging message that applies biblical principles to everyday life.",
                        },
                        {
                          icon: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary mb-4"
                            >
                              <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
                              <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                            </svg>
                          ),
                          title: "Response Time",
                          description:
                            "An opportunity to respond to the message through prayer, reflection, or coming forward.",
                        },
                        {
                          icon: <Users className="h-8 w-8 text-primary mb-4" />,
                          title: "Community Time",
                          description:
                            "After the service, we encourage everyone to stay for refreshments and conversation.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <Card className="bg-muted/30 h-full">
                            <CardContent className="p-6">
                              <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {item.icon}
                              </motion.div>
                              <h3 className="text-xl font-bold mb-2">
                                {item.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </section> */}

        {/* Upcoming Sermons */}
        <section className="py-12 md:py-16 bg-muted" ref={sermonsRef}>
          <div className="mx-auto container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
              initial="hidden"
              animate={isSermonsInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
                <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Coming Up
                </motion.div>
                <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Upcoming Sermon Series
                </motion.h2>
                <motion.div
                  className="h-1 w-20 rounded-full bg-primary/50 mx-auto"
                  initial={{ width: 0 }}
                  animate={isSermonsInView ? { width: 80 } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Join us in the coming weeks as we explore these important
                  topics together.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              animate={isSermonsInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {upcomingSermons.map((sermon, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Calendar className="h-5 w-5 text-primary" />
                        </motion.div>
                        <p className="text-sm font-medium">{sermon.date}</p>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{sermon.title}</h3>
                      <p className="text-primary text-sm mb-3">
                        {sermon.scripture}
                      </p>
                      <p className="text-muted-foreground">
                        {sermon.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isSermonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Link to={"/sermons"}>
                  <Button variant="outline">
                    View Sermons
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Button>
                </Link> */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
