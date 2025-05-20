import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ChevronLeft, Facebook, Twitter, Instagram, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
      
    

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  About
                </Link>
                <Link href="/articles" className="text-lg font-medium text-amber-600">
                  Articles
                </Link>
                <Link href="/events" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  Events
                </Link>
                <Link href="/sermons" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  Sermons
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="flex-1 bg-white rounded-lg shadow-sm p-6 lg:p-8">
            <Link href="/articles" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>

            <div className="relative w-full h-64 sm:h-80 md:h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Featured image for article"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-medium">Faith</span>
              <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full text-xs font-medium">
                Community
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finding Peace in a Busy World: A Christian Perspective
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>May 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Pastor John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">Pastor John Smith</p>
                <p className="text-sm text-gray-500">Senior Pastor</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <p>
                In today's fast-paced world, finding moments of peace and tranquility can seem like an impossible task.
                Between work responsibilities, family obligations, and the constant stream of information from our
                devices, it's easy to feel overwhelmed and disconnected from our spiritual lives.
              </p>

              <h2>The Biblical Foundation of Peace</h2>

              <p>
                Scripture reminds us that peace is not just the absence of conflict but a positive presence that comes
                from God. In John 14:27, Jesus tells us, "Peace I leave with you; my peace I give you. I do not give to
                you as the world gives. Do not let your hearts be troubled and do not be afraid."
              </p>

              <p>
                This divine peace—what the Bible calls "shalom"—is more than just a feeling. It's a state of
                completeness and wholeness that comes from being in right relationship with God, others, and ourselves.
              </p>

              <h2>Practical Steps for Finding Peace</h2>

              <p>
                While we know that true peace comes from God, there are practical steps we can take to position
                ourselves to receive and maintain this peace in our daily lives:
              </p>

              <ol>
                <li>
                  <strong>Start your day with prayer and Scripture.</strong> Before checking emails or social media,
                  spend time in God's presence through prayer and Bible reading.
                </li>
                <li>
                  <strong>Practice the Sabbath.</strong> God designed us to need rest. Set aside a day each week for
                  worship, rest, and rejuvenation.
                </li>
                <li>
                  <strong>Limit digital distractions.</strong> Consider implementing "tech-free" times during your day
                  or week to be more present with God and loved ones.
                </li>
                <li>
                  <strong>Serve others.</strong> Paradoxically, we often find peace when we focus less on ourselves and
                  more on serving others as Christ did.
                </li>
                <li>
                  <strong>Join a community.</strong> We weren't meant to walk our faith journey alone. Connect with
                  fellow believers for support, accountability, and encouragement.
                </li>
              </ol>

              <h2>Finding Peace in Community</h2>

              <p>
                At Grace Church, we believe that finding peace is not a solitary journey. We're committed to creating
                spaces where people can encounter God's peace together—whether through Sunday worship, small groups, or
                service opportunities.
              </p>

              <p>
                We invite you to join us this Sunday as we continue our series on "Peace That Passes Understanding" and
                explore how we can experience God's peace even in life's most challenging circumstances.
              </p>

              <blockquote>
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving,
                present your requests to God. And the peace of God, which transcends all understanding, will guard your
                hearts and your minds in Christ Jesus." — Philippians 4:6-7
              </blockquote>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6">
              <p className="font-medium mb-3">Share this article:</p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Share via Email</span>
                </Button>
              </div>
            </div>
          </article>

          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-sm text-gray-500">May 23, 2025 • 10:00 AM</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <p className="font-medium">Bible Study Group</p>
                  <p className="text-sm text-gray-500">May 25, 2025 • 7:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Community Outreach</p>
                  <p className="text-sm text-gray-500">May 27, 2025 • 9:00 AM</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Events
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Related Articles</h2>
              <div className="space-y-4">
                <div className="flex gap-3 border-b border-gray-100 pb-4">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">The Power of Prayer in Daily Life</h3>
                    <p className="text-sm text-gray-500">May 10, 2025</p>
                  </div>
                </div>
                <div className="flex gap-3 border-b border-gray-100 pb-4">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">Building Strong Christian Families</h3>
                    <p className="text-sm text-gray-500">May 5, 2025</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Article thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">Faith in Times of Uncertainty</h3>
                    <p className="text-sm text-gray-500">April 28, 2025</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Articles
              </Button>
            </div>

            <div className="bg-amber-50 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Join Our Community</h2>
              <p className="text-sm mb-4">
                Sign up for our newsletter to receive updates on church events, new articles, and more.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </form>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Grace Church Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
                <span className="font-semibold text-xl">Grace Church</span>
              </div>
              <p className="text-gray-400 mb-4">A welcoming community of faith, hope, and love in Christ.</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-gray-800">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-gray-800">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-gray-800">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sermons" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link href="/give" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Give
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123 Faith Avenue</p>
                <p>Graceville, CA 90210</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@gracechurch.org</p>
              </address>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Service Times</h4>
                <p className="text-gray-400">Sundays: 9:00 AM & 11:00 AM</p>
                <p className="text-gray-400">Wednesday Bible Study: 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Grace Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
