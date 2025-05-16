"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    id: 1,
    src: "/chidrenMinistry.jpg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "left",
    size: "large",
  },
  {
    id: 1,
    src: "/congregation1.jpg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "left",
    size: "large",
  },
  {
    id: 2,
    src: "/kidssandpaster.jpg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "center",
    size: "large",
  },
  {
    id: 3,
    src: "/chichewa.jpeg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "right",
    size: "large",
  },
  {
    id: 4,
    src: "/chidrenMinistry.jpg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "left",
    size: "large",
  },
  {
    id: 5,
    src: "/kidssandpaster.jpg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "left",
    size: "large",
  },
  {
    id: 6,
    src: "/chichewa.jpeg",
    alt: "Artistic portrait",
    width: 700,
    height: 800,
    parallaxSpeed: 0.2,
    position: "left",
    size: "large",
  },
  {
    id: 9,
    src: "/evangelism.jpg",
    alt: "Street photography",
    width: 700,
    height: 700,
    parallaxSpeed: 0.3,
    position: "center",
    size: "medium",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)
  const { scrollY } = useScroll()

  const [floatingElements, setFloatingElements] = useState([])

  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 10,
      speed: Math.random() * 0.2 + 0.05,
    }))
    setFloatingElements(elements)
  }, [])

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex = direction === "next"
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[newIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") navigateImage("next")
        if (e.key === "ArrowLeft") navigateImage("prev")
        if (e.key === "Escape") setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-white/5"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
            }}
            animate={{
              y: [0, element.speed * 100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 / element.speed,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-10 p-6 md:p-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Gallery <span className="text-rose-400">Experience</span>
        </h1>
        <p className="mt-2 max-w-xl text-gray-300">
          Scroll to explore our unique collection of visual artistry
        </p>
      </motion.div>

      <div ref={containerRef} className="relative pt-32 pb-40 min-h-screen">
        <div className="relative max-w-7xl mx-auto px-4">
          {galleryImages.map((image, index) => {
            const positionClass = {
              left: "ml-0 md:ml-10",
              center: "mx-auto",
              right: "ml-auto mr-0 md:mr-10",
            }[image.position]

            const sizeClass = {
              small: "w-[250px] md:w-[300px]",
              medium: "w-[300px] md:w-[400px]",
              large: "w-[350px] md:w-[500px]",
            }[image.size]

            return (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                positionClass={positionClass}
                sizeClass={sizeClass}
                scrollY={scrollY}
                setSelectedImage={setSelectedImage}
              />
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("prev")
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("next")
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function GalleryItem({ image, index, positionClass, sizeClass, scrollY, setSelectedImage }) {
  const y = useTransform(scrollY, [index * 300, (index + 1) * 800], [0, -200 * image.parallaxSpeed])
  const scale = useTransform(scrollY, [index * 300, (index + 1) * 800], [0.8, 1.05])
  const opacity = useTransform(scrollY, [index * 300 - 300, index * 300, index * 300 + 600], [0, 1, 0.8])

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className={cn("relative mb-40 md:mb-60 cursor-pointer", positionClass, sizeClass)}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      onClick={() => setSelectedImage(image)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <div
          className="relative"
          style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
        >
          <img
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={`(max-width: 768px) 80vw, ${
              image.size === "large" ? "500px" : image.size === "medium" ? "400px" : "300px"
            }`}
          />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 w-full">
            <p className="text-white font-medium">{image.alt}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
