"use client"

import  React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Check, MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function ContactMap() {
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  // Animation controls
  const controls = useAnimation()
  const formRef = useRef(null)
  const mapRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isFormInView) {
      controls.start("formVisible")
    }
    if (isMapInView) {
      controls.start("mapVisible")
    }
  }, [controls, isFormInView, isMapInView])

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  // Animation variants
  const containerVariants = {
    hidden: {},
    formVisible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    mapVisible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    formVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    mapVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  }

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: "123 Church Street, Zomba, Malawi" },
    { icon: <Phone className="h-5 w-5" />, text: "+265 1 234 5678" },
    { icon: <Mail className="h-5 w-5" />, text: "info@zombabaptist.org" },
    { icon: <Clock className="h-5 w-5" />, text: "Sunday Services: 8:00 AM & 10:30 AM" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="mx-auto container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether you have a question, prayer request, or want to join our community.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form Section */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"
            />

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold tracking-tight mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-green-50 border border-green-100 rounded-xl p-8 text-center shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                  >
                    <Check className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for contacting Zomba Baptist Church. We'll respond to your message as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-card rounded-xl p-6 md:p-8 shadow-sm border"
                >
                  <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your name"
                          className={cn(
                            "transition-all duration-300",
                            focusedField === "name" && "border-primary shadow-sm",
                          )}
                          required
                        />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your email"
                          className={cn(
                            "transition-all duration-300",
                            focusedField === "email" && "border-primary shadow-sm",
                          )}
                          required
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone (optional)
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your phone number"
                        className={cn(
                          "transition-all duration-300",
                          focusedField === "phone" && "border-primary shadow-sm",
                        )}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Select value={formState.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        id="subject"
                        className={cn(
                          "transition-all duration-300",
                          focusedField === "subject" && "border-primary shadow-sm",
                        )}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="prayer">Prayer Request</SelectItem>
                        <SelectItem value="membership">Membership Information</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your message"
                        rows={5}
                        className={cn(
                          "transition-all duration-300",
                          focusedField === "message" && "border-primary shadow-sm",
                        )}
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full py-6 text-base font-medium" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Map and Contact Info Section */}
          <motion.div
            ref={mapRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight mb-2">Find Us</h3>
              <p className="text-muted-foreground">
                We're conveniently located in the heart of Zomba, just a few blocks from downtown.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-xl border overflow-hidden shadow-md"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.809933638927!2d35.32057426530683!3d-15.385905218177017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904bedc35d9a7%3A0x7e8ed903188523b7!2sZomba%20Baptist%20Church!5e0!3m2!1sen!2smw!4v1746456701614!5m2!1sen!2smw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>

              <motion.div
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <MapPin className="h-5 w-5 text-primary" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="mt-0.5 text-primary">{item.icon}</div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-xl font-bold">Directions</h3>
              <p className="text-muted-foreground">
                From M1 road, turn at Zomba Clock Tower into Zomba City. Drive straight through town passing Zomba
                Police Station. Continue up the hill and turn right at Zomba Baptist Church sign. The church is located
                on the right side.
              </p>
              <p className="text-muted-foreground">
                Public Transportation: Bus routes 10 and 15 stop directly in front of the church.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
