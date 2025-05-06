"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

export default function PastorSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute top-20 left-0 w-32 h-32 rounded-full bg-primary/5 -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-primary/5 -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg order-2 lg:order-1">
              <img
                src="/pastorPicture.jpg"
                alt="Pastor Richard Makhenjera"
                className="object-cover"
              />

              <motion.div
                className="absolute inset-0 border-8 border-white/20 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              <motion.div
                className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              />
            </div>

            <motion.div
              className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="space-y-8 order-1 lg:order-2">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                A Message from Our Pastor
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hello in Jesus Name!
              </motion.h2>
            </motion.div>

            <motion.div
              className="relative p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Quote className="absolute text-primary/10 w-20 h-20 -top-4 -left-4" />

              <div className="relative space-y-4 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  I am so excited to welcome you to our ZBC website. We are looking forward to keep interacting with
                  you. Our goal is to keep you informed of what the Lord is doing through His Church. Keep following us
                  for what the Lord Almighty wants to share with you through this website.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  We believe that God has a purpose for each of us, and we're excited to help you discover yours. I look
                  forward to meeting you personally this Sunday!
                </motion.p>

                <motion.div
                  className="pt-4 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  With blessings,
                  <motion.div
                    className="flex justify-end items-center gap-3 mt-2"
                    initial={{ x: -20 }}
                    animate={{ x: isInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <motion.hr
                      className="flex-grow border-t border-primary/30"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? "100%" : 0 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                    />
                    <span className="text-right italic font-semibold text-primary text-lg">
                      Pastor Richard Makhenjera
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary-dark, #0056b3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Meet Our Pastor
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
