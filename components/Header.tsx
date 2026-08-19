'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-mint-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Mint Leaves */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Leaf */}
                <ellipse
                  cx="16"
                  cy="28"
                  rx="8"
                  ry="14"
                  fill="#7ED321"
                  transform="rotate(-45 16 28)"
                />
                {/* Center Leaf */}
                <ellipse
                  cx="24"
                  cy="12"
                  rx="7"
                  ry="12"
                  fill="#006B3C"
                  transform="rotate(0 24 12)"
                />
                {/* Right Leaf */}
                <ellipse
                  cx="32"
                  cy="28"
                  rx="8"
                  ry="14"
                  fill="#5CB703"
                  transform="rotate(45 32 28)"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-sm leading-tight text-mint-600">Mint Community</div>
              <div className="font-heading font-bold text-sm leading-tight text-mint-600">Library</div>
            </div>
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
