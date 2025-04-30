import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Heart,
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

function AboutPage() {
  return (
    <>
      <main className="">
        {/* Hero Section
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full ">
            <img
              src="/congregation1.jpg"
              alt="Church congregation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  About Our Church
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  A welcoming community of faith, hope, and love
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="relative h-[50vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About Our Church
              </h1>
              <p className="text-lg md:text-xl">
                A Community of Faith and Love
              </p>
            </div>
          </div>
          <img
            src="/congregation1.jpg"
            alt="Church congregation"
            className="object-cover w-full h-full transform scale-110 motion-safe:scroll-parallax"
            style={{ transform: "translateY(var(--scroll-offset, 0))" }}
          />
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16 bg-white flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Vibrant Community
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Zomba Baptist Church exists to share the transformative love
                  of Christ with our community and beyond. Over 500 active
                  members in our vibrant community. Diverse congregation united
                  in faith and worship, Led by dedicated pastoral leadership,
                  Inclusive membership structure comprising: Senior Pastor-{">"}{" "}
                  Full Members -{">"}Associate Members
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>Join Us Sunday</Button>
                  <Button variant="outline">Our Beliefs</Button>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <img
                  src="/congregation1.jpg"
                  alt="Church community event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our History & Leadership */}
        <section className="py-12 md:py-16 bg-muted/50 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="history" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="history">Our History</TabsTrigger>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="history" className="space-y-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Our Journey of Faith
                  </h2>
                  <p className="text-muted-foreground">
                    Grace Community Church has been serving our community for
                    over 30 years.
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3">
                    <div className="text-primary font-bold">1990</div>
                    <h3 className="text-xl font-bold">Our Founding</h3>
                    <p className="text-muted-foreground">
                      Grace Community Church was founded by a small group of
                      families committed to establishing a welcoming place of
                      worship in our community.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-primary font-bold">2005</div>
                    <h3 className="text-xl font-bold">Building Expansion</h3>
                    <p className="text-muted-foreground">
                      As our congregation grew, we expanded our facilities to
                      include a larger sanctuary, educational wing, and
                      community center.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-primary font-bold">2020</div>
                    <h3 className="text-xl font-bold">Community Outreach</h3>
                    <p className="text-muted-foreground">
                      We launched several new outreach programs to better serve
                      our local community and expanded our global missions work.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="leadership" className="space-y-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Our Leadership Team
                  </h2>
                  <p className="text-muted-foreground">
                    Meet the dedicated individuals who guide our church
                    community.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                      <img
                        src="/placeholder.svg?height=160&width=160"
                        alt="Pastor David Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Pastor David Johnson</h3>
                    <p className="text-primary">Senior Pastor</p>
                    <p className="text-muted-foreground mt-2">
                      Pastor David has been leading our church for over 15 years
                      with wisdom and compassion.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                      <img
                        src="/placeholder.svg?height=160&width=160"
                        alt="Sarah Williams"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Sarah Williams</h3>
                    <p className="text-primary">Worship Director</p>
                    <p className="text-muted-foreground mt-2">
                      Sarah leads our worship ministry with passion and
                      creativity.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                      <img
                        src="/placeholder.svg?height=160&width=160"
                        alt="Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Michael Chen</h3>
                    <p className="text-primary">Youth Pastor</p>
                    <p className="text-muted-foreground mt-2">
                      Michael brings energy and insight to our thriving youth
                      ministry.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        {/* Our Values */}
        <section className="py-12 md:py-16 bg-white flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What We Stand For
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  These core values guide everything we do as a church
                  community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Love</h3>
                  <p className="text-muted-foreground">
                    We believe in showing Christ&apos;s love to everyone,
                    regardless of background or circumstance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      className="h-6 w-6 text-primary"
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
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      className="h-6 w-6 text-primary"
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

        {/* Service Times & Location */}
        <section className="py-12 md:py-16 bg-muted flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Join Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  Service Times & Location
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Sunday Services</h3>
                      <p className="text-muted-foreground">
                        9:00 AM - Traditional Service
                      </p>
                      <p className="text-muted-foreground">
                        11:00 AM - Contemporary Service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Wednesday Night</h3>
                      <p className="text-muted-foreground">
                        6:30 PM - Bible Study & Youth Groups
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Our Location</h3>
                      <p className="text-muted-foreground">123 Faith Avenue</p>
                      <p className="text-muted-foreground">Anytown, ST 12345</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button>Get Directions</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Church building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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

export default AboutPage;
