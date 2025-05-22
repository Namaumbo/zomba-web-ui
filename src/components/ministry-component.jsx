"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MinistryComponent({
  ministries = [
    {
      ministry: "Your Ministry Name",
      coverPage: "/placeholder.svg?height=600&width=800",
      description:
        "Description of the ministry. This is where you can provide a brief overview of what this ministry does and who it serves.",
      verse:
        "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. - Ephesians 2:10",
    },
  ],
  onMinistryClick,
}) {
  const [hoveredIndex, setHoveredIndex] = useState([]);

  const handleMinistryClick = (ministry) => {
    if (onMinistryClick) {
      onMinistryClick(ministry);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {ministries.map((ministry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{ y: -10 }}
          className="h-full"
        >
          <Card
            className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleMinistryClick(ministry)}
          >
            <div className="relative overflow-hidden h-64">
              <motion.div
                initial={{ scale: 1 }}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <img
                  src={ministry.coverPage || "/placeholder.svg"}
                  alt={ministry.ministry}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? "grayscale-0" : "grayscale"
                  }`}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-bold text-2xl tracking-tight mb-2">
                  {ministry.ministry}
                </h3>
                <div className="h-1 w-16 bg-primary/50 rounded-full" />
              </motion.div>
            </div>

            <CardContent className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {ministry.description}
                </p>

                <div className="flex items-start gap-2 mb-6 bg-teal-50 p-4 rounded-lg">
                  <Quote className="text-teal-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm italic text-gray-700">
                    {ministry.verse}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                  x: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <Button className="w-full group  text-white">
                  Read More
                  <motion.div
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
