"use client"

import { useCallback,  RefObject } from "react"

export function useParallax(ref, speed = 0.5) {
  const handleScroll = useCallback(() => {
    if (!ref.current) return

    const scrollTop = window.scrollY
    const elementTop = ref.current.getBoundingClientRect().top + scrollTop
    const elementHeight = ref.current.offsetHeight
    const windowHeight = window.innerHeight
    if (scrollTop + windowHeight > elementTop && elementTop + elementHeight > scrollTop) {
      const distanceFromTop = scrollTop + windowHeight - elementTop
      const percentVisible = distanceFromTop / (windowHeight + elementHeight)
      const parallaxOffset = (percentVisible - 0.5) * speed * elementHeight
      ref.current.style.transform = `translateY(${parallaxOffset}px)`
    }
  }, [ref, speed])

  return { handleScroll }
}
