"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Send,
  Check,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import ContactMap from "../components/contact-map";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
      phone: "(+256) 987654321 ",
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
      name: "Michael Chen",
      position: "Youth Pastor",
      email: "example@example@gmail.com",
      phone: "(+265) 987654321 ",
      img: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jennifer Martinez",
      position: "Children's Ministry Director",
      email: "example@example@gmail.com",
      phone: "(+265) 987654321",
      img: "/placeholder.svg?height=200&width=200",
    },
  ];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
                  <p className="text-muted-foreground">123 Faith Avenue</p>
                  <p className="text-muted-foreground">Anytown, ST 12345</p>
                  <Button variant="link" className="mt-2">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                  <p className="text-muted-foreground">Fax: (123) 456-7891</p>
                  <Button variant="link" className="mt-2">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@gracechurch.org</p>
                  <p className="text-muted-foreground">
                    prayer@gracechurch.org
                  </p>
                  <Button variant="link" className="mt-2">
                    Send Email
                  </Button>
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
                  <Button variant="link" className="mt-2">
                    View Schedule
                  </Button>
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
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Staff Directory
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

            <div className="text-center mt-8">
              <Button variant="outline">View All Staff</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
