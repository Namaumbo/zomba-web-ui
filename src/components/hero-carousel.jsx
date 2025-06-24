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
import { useMediaQuery } from "../hooks/use-media-querry";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "/bg-4.jpg",
    title: "Welcome to Zomba Baptist Church",
    description: "To Serve and To Give",
    verses:
      "Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many - Matthew 20:28",
  },
  {
    img: "/mgonero.jpg",
    title: "God Loves You",
    description:
      "At ZBC, We believe that God loves you and has a plan for your life. He gave his Son for You to be saved and have eternal life",
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
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  // Optimize animations for mobile
  const getAnimationSettings = () => {
    return {
      title: {
        initial: { opacity: 0, y: isMobile ? 20 : 30 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: isMobile ? 0.6 : 0.8,
          delay: isMobile ? 0.2 : 0.3,
        },
      },
      description: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          duration: isMobile ? 0.6 : 0.8,
          delay: isMobile ? 0.4 : 0.6,
        },
      },
      verse: {
        initial: { opacity: 0, x: isMobile ? -10 : -20 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: isMobile ? 0.6 : 0.8,
          delay: isMobile ? 0.6 : 0.9,
        },
      },
      button: {
        initial: { opacity: 0, y: isMobile ? 10 : 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: isMobile ? 0.6 : 0.8,
          delay: isMobile ? 0.8 : 1.2,
        },
      },
    };
  };

  const animations = getAnimationSettings();

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
              <CarouselItem
                key={index}
                className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh]"
              >
                <div className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{
                      scale: currentSlide === index ? 1 : 1.1,
                    }}
                    transition={{ duration: 8, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-primary/30 z-10" />
                    <img
                      src={slide.img || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </motion.div>

                  {/* Gradient overlay instead of flat color */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay" />

                    <div className="relative text-white p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
                      {index === currentSlide && (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center">
                          <div className="md:col-span-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isMobile ? "50%" : "40%" }}
                              transition={{
                                duration: isMobile ? 1 : 1.2,
                                ease: "easeInOut",
                              }}
                              className="h-1 bg-white mb-4 md:mb-6"
                            />

                            <motion.h1
                              {...animations.title}
                              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 font-heading leading-tight"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.p
                              {...animations.description}
                              className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-white/90 max-w-xl"
                            >
                              {slide.description}
                            </motion.p>

                            <motion.div {...animations.verse}>
                              <p className="text-base sm:text-lg italic text-white/80 border-l-4 border-primary/70 pl-4 max-w-xl">
                                {slide.verses}
                              </p>
                            </motion.div>

                            <motion.div
                              {...animations.button}
                              className="mt-4 sm:mt-6 md:mt-8"
                            >
                              <Link to="/about">
                                <button className="bg-primary hover:bg-primary/90 active:bg-primary/80 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-all transform hover:scale-105 shadow-lg w-[50%] sm:w-auto">
                                  Learn More
                                </button>
                              </Link>
                            </motion.div>
                          </div>

                          <div className="hidden md:block md:col-span-2">
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

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative h-2 sm:h-3 transition-all duration-500 overflow-hidden rounded-full",
                currentSlide === index
                  ? "w-8 sm:w-12 bg-white"
                  : "w-2 sm:w-3 bg-white/40"
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
        <CarouselPrevious className="left-2 sm:left-4 md:left-6 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-white/20 hover:bg-black/50 transition-all" />
        <CarouselNext className="right-2 sm:right-4 md:right-6 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-white/20 hover:bg-black/50 transition-all" />
      </Carousel>
    </section>
  );
}
