"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import data from "../lib/data.json";

export default function MinistryComponent({}) {
  const [hoveredIndex, setHoveredIndex] = useState([]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {Object.entries(data).map(([key, ministry], index) => (
        <motion.div
          key={key}
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
                  {ministry.title}
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
                    {ministry.verse} - {ministry.verseReference}
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
                <Link to={`/ministries/${ministry.slug}`}>
                  <Button className="w-full group text-white">
                    Read More
                    <motion.div
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
{
  /* {data.map((ministry, index) => (
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
                <blockquote className="border-l-4 border-purple-600 pl-4 italic text-sm text-gray-500 mb-3">
                  {ministry.description}
                </blockquote>
                <div className="flex items-start gap-2 mb-6 bg-teal-50 p-4 rounded-lg">
                  <Quote className="text-teal-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm italic text-gray-700">
                    {ministry.verse}
                  </p>
                </div>
              </div>

             
               
            </CardContent>
          </Card>
      ))} */
}
