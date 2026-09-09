'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    '/WhatsApp Image 2026-08-19 at 10.26.34.jpeg',
    '/WhatsApp Image 2026-08-19 at 10.26.34 (2).jpeg',
    '/WhatsApp Image 2026-08-19 at 10.26.34 (3).jpeg',
    '/WhatsApp Image 2026-08-19 at 10.26.34 (4).jpeg',
    '/WhatsApp Image 2026-08-29 at 13.48.47.jpeg',
    '/WhatsApp Image 2026-08-29 at 14.14.37.jpeg',
    '/mint-library-image.jpeg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="bg-gradient-to-br from-mint-50 via-white to-mint-100 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="section-title leading-tight mb-4">
              Welcome to Your <span className="text-mint-600">Community Library</span>
            </h1>
            <p className="text-lg text-mint-700 mb-6 leading-relaxed">
              More than just books—Mint Library is a vibrant community space dedicated to learning, connection, and growth. Explore our programs, resources, and join us in building a stronger community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs" className="btn-primary text-center">
                Explore Programs
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right - Image Slideshow */}
          <div className="rounded-lg h-80 overflow-hidden shadow-lg relative">
            {/* Slideshow Images */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mint Library Slideshow ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-16 max-w-2xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search our catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-mint-300 focus:outline-none focus:border-mint-600 focus:ring-2 focus:ring-mint-200"
            />
            <button type="submit" className="btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
