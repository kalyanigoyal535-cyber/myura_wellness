import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)
  const [bannerInView, setBannerInView] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [bannerHeight, setBannerHeight] = useState('85vh')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
    AOS.refresh()

    // Detect screen width and adjust banner height
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setBannerHeight(mobile ? '60vh' : '85vh') // smaller height for mobile
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Timer to show popup after 2 seconds
    const timer = setTimeout(() => {
      if (bannerInView) setShowPopup(true)
    }, 2000)

    // Reset popup when user scrolls out of banner
    const handleScroll = () => {
      const scrollY = window.scrollY
      const bannerPixelHeight = window.innerHeight * (isMobile ? 0.6 : 0.85)
      if (scrollY > bannerPixelHeight) {
        setBannerInView(false)
        setShowPopup(false)
      } else {
        setBannerInView(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [bannerInView, isMobile])

  return (
    <section
      className="relative w-full"
      style={{
        minHeight: bannerHeight,
        marginTop: '110px'
      }}
    >
      {/* Hero Image */}
   <motion.div
  className="absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-700 ease-in-out"
  style={{
    backgroundImage: isMobile
      ? "url('/assets/Banner12.jpg')"
      : "url('/assets/HomeWebsiteBanner-2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    opacity: showPopup ? 0.5 : 1
  }}
></motion.div>


      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-white/10 to-white/10"></div>

      {/* Popup Modal Buttons */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative flex flex-col md:flex-row gap-6 items-center justify-center">
              <a
                href="/shop"
                className="bg-emerald-500 text-white px-8 py-4 rounded-3xl font-bold shadow-2xl hover:scale-105 hover:shadow-emerald-400/60 transition-all duration-300"
              >
                Buy Now
              </a>
              <a
                href="#learn-more"
                className="bg-white text-emerald-700 border-2 border-emerald-500 px-8 py-4 rounded-3xl font-bold shadow-lg hover:bg-emerald-500 hover:text-white hover:shadow-emerald-400/60 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
        style={{ zIndex: 9999 }}
        onClick={() => {
          const targetPosition = window.innerHeight
          const startPosition = window.scrollY
          const distance = targetPosition - startPosition
          let startTime = null

          const smoothScroll = (currentTime) => {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const duration = 800
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0, run)
            if (timeElapsed < duration) requestAnimationFrame(smoothScroll)
          }

          const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2
            if (t < 1) return (c / 2) * t * t + b
            t--
            return (-c / 2) * (t * (t - 2) - 1) + b
          }

          requestAnimationFrame(smoothScroll)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
