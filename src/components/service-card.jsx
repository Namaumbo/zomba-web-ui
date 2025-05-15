"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function ServiceCard({
  time,
  service,
  description,
  location,
  image,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="Chichewa Service"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full w-full p-6 flex flex-col justify-end z-10">
        {/* Time Badge */}
        <motion.div
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2"
          whileHover={{ y: -3 }}
        >
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-white  text-sm font-bold">{time}AM</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="backdrop-blur-sm absolute bottom-0 left-0 gap-2 text-white/70 pb-6 p-4">
            <h3 className="text-xl font-bold text-white">{service}</h3>
            <p className="text-white text-base max-w-md mt-2">{description}.</p>
            <div className="flex items-center gap-2 mt-4">
              <MapPin className="h-4 w-4" color="white" />
              <span className="text-sm text-white">{location}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20 rounded-tl-xl"
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20 rounded-br-xl"
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
