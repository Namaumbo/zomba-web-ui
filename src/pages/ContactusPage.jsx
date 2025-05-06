"use client";

import { useState } from "react";
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
      name: "Pastor David Johnson",
      position: "Senior Pastor",
      email: "pastor.david@gracechurch.org",
      phone: "(123) 456-7890 ext. 101",
      img: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Williams",
      position: "Worship Director",
      email: "sarah.williams@gracechurch.org",
      phone: "(123) 456-7890 ext. 102",
      img: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Chen",
      position: "Youth Pastor",
      email: "michael.chen@gracechurch.org",
      phone: "(123) 456-7890 ext. 103",
      img: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jennifer Martinez",
      position: "Children's Ministry Director",
      email: "jennifer.martinez@gracechurch.org",
      phone: "(123) 456-7890 ext. 104",
      img: "/placeholder.svg?height=200&width=200",
    },
  ];

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

        {/* Contact Form & Map */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="mx-auto container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold tracking-tighter mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Have a question or want to get in touch? Fill out the form
                    below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll respond to your message
                      as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone (optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Select
                        value={formState.subject}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="prayer">Prayer Request</SelectItem>
                          <SelectItem value="membership">
                            Membership Information
                          </SelectItem>
                          <SelectItem value="volunteer">
                            Volunteer Opportunities
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-2">
                    Find Us
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We're conveniently located in the heart of Anytown, just a
                    few blocks from downtown.
                  </p>
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-xl border">
                  {/* This would typically be replaced with an actual map embed */}
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Map Placeholder</h3>
                      <p className="text-muted-foreground">
                        This would be replaced with an actual map embed from
                        Google Maps, Mapbox, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Directions</h3>
                  <p className="text-muted-foreground">
                    From Highway 101, take Exit 25 and turn right onto Main
                    Street. Continue for 2 miles, then turn left onto Faith
                    Avenue. The church will be on your right.
                  </p>
                  <p className="text-muted-foreground">
                    Public Transportation: Bus routes 10 and 15 stop directly in
                    front of the church.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button>Get Directions</Button>
                  <Button variant="outline">View Larger Map</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
