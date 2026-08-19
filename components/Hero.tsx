'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
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

          {/* Right - Placeholder for Image */}
          <div className="bg-mint-200 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-mint-700">Add your library image here</p>
            </div>
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
