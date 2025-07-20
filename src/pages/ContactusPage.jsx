"use client";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  UsersRound,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import ContactMap from "../components/contact-map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqItems = [
    {
      question: "What should I wear?",
      answer:
        "We have no dress code. Some people dress up, others come casual. We want you to feel comfortable, so come as you are!",
    },
    {
      question: "What about my kids?",
      answer:
        "We offer age-appropriate children's programs during both Sunday services. Our children's area is safe, fun, and educational. First-time visitors can check in at our Welcome Center.",
    },
    {
      question: "How long are the services?",
      answer:
        "Our services typically last about 75 minutes. They include worship through music, prayer, and a relevant message from the Bible.",
    },
    {
      question: "Do I need to bring a Bible?",
      answer:
        "While we encourage everyone to bring their Bible, we also provide scripture on screen during the service. We also have Bibles available for you to use or take home.",
    },
    {
      question: "Will I be singled out as a visitor?",
      answer:
        "No, we won't ask you to stand or identify yourself as a visitor. We want you to feel welcome without any pressure or embarrassment.",
    },
  ];

  const faqRef = useRef(null);

  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  const staffMembers = [
    {
      name: "Pastor Richard Makhenjera",
      position: "Resident Pastor",
      email: "example@example.com",
      phone: "(+256) 991 7611 130 ",
      img: "",
    },
    {
      name: "Mr Kambalame",
      position: "Church Administrator",
      email: "example@example.com",
      phone: "(+265) 987654321 ",
      img: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. G. Kamchedzera",
      position: "Elder",
      email: "gkamchedzera@unima.ac.mw",
      phone: "(+265) 992 58 0959 ",
      img: "/placeholder.svg?height=200&width=200",
    },
  ];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  React.useEffect(() => {
    document.title = "Contact | Zomba Baptist Church";
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Church building"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Contact Us
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  We'd love to hear from you and answer any questions you may
                  have
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    Zomba, easten region of Malawi
                  </p>
                  <p className="text-muted-foreground">
                    In the old capital city of Malawi
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">(+265) 993 740 261</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@zombabaptistchurch.org
                  </p>
                  <p className="text-muted-foreground">
                    prayer@zombabaptistchurch.org
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ContactMap />
        {/* Staff Contact */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <motion.div
                  className=" mb-5 inline-flex items-center  rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200"
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <UsersRound className="w-4 h-4 mr-1" />
                  Our Team
                </motion.div>
                <h2 className=" text-[#1D3557]  text-3xl font-bold tracking-tighter sm:text-4xl">
                  Staff Directory & Feed back
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Meet our dedicated staff members who are here to serve and
                  support you.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {staffMembers.map((staff, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={staff.img || "/placeholder.svg"}
                      alt={staff.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{staff.name}</h3>
                    <p className="text-primary mb-2">{staff.position}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{staff.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{staff.phone}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16" ref={faqRef}>
          <div className="mx-auto container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
              initial="hidden"
              animate={isFaqInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
                <motion.div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Questions
                </motion.div>
                <motion.h2 className=" text-[#1D3557] text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </motion.h2>
                <motion.div
                  className="h-1 w-20 rounded-full bg-primary/50 mx-auto"
                  initial={{ width: 0 }}
                  animate={isFaqInView ? { width: 80 } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Find answers to common questions about our worship services.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <HelpCircle className="h-5 w-5 text-primary" />
                          </motion.div>
                          <span>{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
