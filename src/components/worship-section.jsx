"use client"

import { useEffect } from "react"
import { motion, useScroll, useTransform, stagger, useAnimate } from "framer-motion"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"

export default function WorshipSection() {
  const [scope, animate] = useAnimate()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.2, 1])

  useEffect(() => {
    const animateElements = async () => {
      await animate("h2", { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.3 })

      await animate(".service-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.15) })
    }

    animateElements()
  }, [animate])

  return (
    <section ref={scope} className="container mx-auto py-16 md:py-24 bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6">
        <motion.div
          className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.15)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Join Our Community
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center w-full max-w-6xl">
          <div className="space-y-6">
            <ServiceLocation />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />

              <motion.img
                src="/inchurch.jpg"
                alt="Church worship service"
                className="aspect-[5/3] w-full rounded-3xl object-cover shadow-2xl"
                initial={{ scale: 1.1 }}
                animate={{
                  scale: [1.1, 1.05, 1.1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-0 left-0 p-6 text-white z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.span
                  className="text-sm font-medium uppercase tracking-wider"
                  whileHover={{ letterSpacing: "0.1em" }}
                  transition={{ duration: 0.3 }}
                >
                  Zomba Baptist Church
                </motion.span>
                <br />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="h-0.5 bg-white/70 mt-2"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 backdrop-blur-md z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            />

            <motion.div
              className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/10 backdrop-blur-sm z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceLocation() {
  return (
    <div className="space-y-6">
      <motion.div
        className="service-card p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-2.5 rounded-xl bg-primary/10 text-primary"
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="h-6 w-6" />
          </motion.div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">Sunday Service</h3>
            <p className="text-gray-600">Join us every Sunday for worship and fellowship</p>
            <div className="pt-2 flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" /> 9:00 AM & 11:00 AM
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="service-card p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-2.5 rounded-xl bg-primary/10 text-primary"
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="h-6 w-6" />
          </motion.div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600">123 Faith Street, Zomba, Malawi</p>
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 inline-flex items-center text-sm text-primary font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get directions <ChevronRight className="h-4 w-4 ml-1" />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="service-card p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-2.5 rounded-xl bg-primary/10 text-primary"
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
              <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
              <path d="M12 6h.01"></path>
              <path d="M17 10H7"></path>
              <path d="M7 14h.01"></path>
              <path d="M17 14h.01"></path>
            </motion.svg>
          </motion.div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="text-gray-600">Have questions? Reach out to our team</p>
            <motion.a
              href="tel:+265123456789"
              className="pt-2 inline-flex items-center text-sm text-primary font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              +265 123 456 789 <ChevronRight className="h-4 w-4 ml-1" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
