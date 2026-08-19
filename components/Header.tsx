'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-mint-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-mint-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-mint-600">Mint Library</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-mint-900 hover:text-mint-600 transition-colors">
              Home
            </Link>
            <Link href="/programs" className="text-mint-900 hover:text-mint-600 transition-colors">
              Programs & Classes
            </Link>
            <Link href="/resources" className="text-mint-900 hover:text-mint-600 transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-mint-900 hover:text-mint-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-mint-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-mint-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-mint-600 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-mint-900 hover:text-mint-600">
              Home
            </Link>
            <Link href="/programs" className="text-mint-900 hover:text-mint-600">
              Programs & Classes
            </Link>
            <Link href="/resources" className="text-mint-900 hover:text-mint-600">
              Resources
            </Link>
            <Link href="/about" className="text-mint-900 hover:text-mint-600">
              About Us
            </Link>
            <Link href="/contact" className="btn-primary text-sm w-full text-center">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
