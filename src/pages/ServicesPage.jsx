import { Link } from "react-router-dom";
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
  Heart,
  Clock,
  Music,
  BookOpen,
  Users,
  Calendar,
  HelpCircle,
  MapPin,
} from "lucide-react";

export default function ServicePage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Church worship service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Worship Services
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  Join us as we gather to worship, learn, and grow together in
                  faith
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Join Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Service Times
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  We offer multiple services to accommodate different schedules
                  and worship preferences.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Traditional Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Sunday 9:00 AM</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">
                    Traditional Service
                  </p>
                  <p className="text-muted-foreground mb-4">
                    A classic worship experience featuring hymns, choir, and
                    traditional liturgy.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Main Sanctuary</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contemporary Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Sunday 11:00 AM</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">
                    Contemporary Service
                  </p>
                  <p className="text-muted-foreground mb-4">
                    A modern worship experience with our praise band and
                    contemporary music.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Main Sanctuary</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Wednesday Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Wednesday 6:30 PM</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Midweek Service</p>
                  <p className="text-muted-foreground mb-4">
                    A casual midweek gathering with Bible study, prayer, and
                    fellowship.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Fellowship Hall</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button>Plan Your Visit</Button>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  For Visitors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What to Expect
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  New to Zomba Baptist Church? Here's what you can expect during
                  your visit.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Church service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Warm Welcome</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our greeters will welcome you at the door and help you find
                    your way around. Stop by our Welcome Center for more
                    information.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Worship</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We begin with about 20 minutes of music led by our worship
                    team. The words are projected on screens so you can sing
                    along.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Message</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our pastor delivers a relevant, Bible-based message that
                    applies to everyday life. Messages typically last 30-35
                    minutes.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Community</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We value connection. After the service, join us for coffee
                    and conversation in our Fellowship Hall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Elements */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Worship
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Elements of Our Service
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Each service includes these key elements to create a
                  meaningful worship experience.
                </p>
              </div>
            </div>
            <Tabs defaultValue="traditional" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="traditional">
                    Traditional Service
                  </TabsTrigger>
                  <TabsTrigger value="contemporary">
                    Contemporary Service
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="traditional" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <Music className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Hymns & Choir</h3>
                      <p className="text-muted-foreground">
                        Our traditional service features beloved hymns led by
                        our choir and organ accompaniment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <BookOpen className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        Scripture Reading
                      </h3>
                      <p className="text-muted-foreground">
                        We read from both the Old and New Testaments, following
                        the church calendar.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">
                        Responsive Readings
                      </h3>
                      <p className="text-muted-foreground">
                        The congregation participates in responsive readings
                        from the Psalms and liturgical texts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">Sermon</h3>
                      <p className="text-muted-foreground">
                        A thoughtful exposition of Scripture that connects
                        ancient wisdom to contemporary life.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">Communion</h3>
                      <p className="text-muted-foreground">
                        We celebrate communion on the first Sunday of each
                        month, open to all believers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">Benediction</h3>
                      <p className="text-muted-foreground">
                        We close with a blessing that sends the congregation out
                        to serve in the world.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="contemporary" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <Music className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Praise Band</h3>
                      <p className="text-muted-foreground">
                        Our contemporary service features modern worship music
                        led by our praise band.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">
                        Welcome & Announcements
                      </h3>
                      <p className="text-muted-foreground">
                        We begin with a warm welcome and brief announcements
                        about church life.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">
                        Extended Worship
                      </h3>
                      <p className="text-muted-foreground">
                        We spend 25-30 minutes in worship through contemporary
                        music and prayer.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">Message</h3>
                      <p className="text-muted-foreground">
                        A relevant, engaging message that applies biblical
                        principles to everyday life.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
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
                      <h3 className="text-xl font-bold mb-2">Response Time</h3>
                      <p className="text-muted-foreground">
                        An opportunity to respond to the message through prayer,
                        reflection, or coming forward.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Community Time</h3>
                      <p className="text-muted-foreground">
                        After the service, we encourage everyone to stay for
                        refreshments and conversation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Upcoming Sermons */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Coming Up
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Upcoming Sermon Series
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Join us in the coming weeks as we explore these important
                  topics together.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {upcomingSermons.map((sermon, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
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
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View Past Sermons</Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Find answers to common questions about our worship services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
