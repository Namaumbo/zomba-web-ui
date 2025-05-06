"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    img: "/bg-4.jpg",
    title: "Welcome to Zomba Baptist Church",
    description: "To Serve and To Give",
    verses:
      "Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many - Matthew 20:28",
  },
  {
    img: "/placeholder.svg?height=600&width=1200",
    title: "God Loves You",
    description:
      "At ZBC, We believe that God loves you and has a plan for your life.He gave his Son for You to be saved and have etrnal life",
    verses:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life - John 3:16",
  },
  {
    img: "/inchurch.jpg",
    title: "Be Jesus' Disciple with Others",
    description:
      "Join us in our journey of faith as we learn, worship, and fellowship with God Almighty and each other.",
    verses:
      "Go and make disciples of all nations, baptizing them in the name of the Father, Son and Holy Spirit - Matthew 28:18-20",
  },
];
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [carouselApi, setCarouselApi] = useState(null);
  const autoplayRef = useRef(null);

  // Create autoplay plugin with reset capability
  useEffect(() => {
    const plugin = Autoplay({ delay: 7000, stopOnInteraction: false });
    autoplayRef.current = plugin;
    return () => {
      if (plugin) plugin.stop();
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    if (!carouselApi) return;
    carouselApi.scrollTo(index);

    // Reset autoplay timer
    if (autoplayRef.current) {
      autoplayRef.current.reset();
    }
  };

  return (
    <section className="relative">
      <Carousel
        className="w-full"
        plugins={autoplayRef.current ? [autoplayRef.current] : []}
        setApi={setCarouselApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="min-h-[85vh]">
                <div className="relative h-[85vh] w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{
                      scale: currentSlide === index ? 1 : 1.1,
                    }}
                    transition={{ duration: 8, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-primary/30 z-10" /> {/* Added overlay */}
                    <img
                      src={slide.img || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay instead of flat color */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay" />

                    <div className="relative text-white p-8 max-w-7xl mx-auto">
                      {index === currentSlide && (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                          <div className="md:col-span-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "40%" }}
                              transition={{ duration: 1.2, ease: "easeInOut" }}
                              className="h-1 bg-white mb-6"
                            />

                            <motion.h1
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                              className="text-xl md:text-2xl mb-4 text-white/90 max-w-xl"
                            >
                              {slide.description}
                            </motion.p>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.9 }}
                            >
                              <p className="text-lg italic text-white/80 border-l-4 border-primary/70 pl-4 max-w-xl">
                                {slide.verses}
                              </p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 1.2 }}
                              className="mt-8"
                            >
                              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg">
                                Learn More
                              </button>
                            </motion.div>
                          </div>

                          <div className="hidden md:block md:col-span-2">
                            {/* Optional decorative element */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 0.15, scale: 1 }}
                              transition={{ duration: 1.5, delay: 0.6 }}
                              className="relative w-full aspect-square rounded-full border-[20px] border-white/20"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative h-3 transition-all duration-500 overflow-hidden rounded-full",
                currentSlide === index ? "w-12 bg-white" : "w-3 bg-white/40"
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <motion.div
                  className="absolute inset-0 bg-primary/60"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Custom navigation arrows - now properly connected to the carousel API */}
        <CarouselPrevious className="left-6 h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-white/20 hover:bg-black/50 transition-all" />
        <CarouselNext className="right-6 h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-white/20 hover:bg-black/50 transition-all" />
      </Carousel>
    </section>
  );
}
