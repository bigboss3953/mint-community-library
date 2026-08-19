```jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-mint-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/mint library logo.png"
                alt="Mint Community Library Logo"
                className="w-12 h-12 object-contain"
              />

              <span className="font-heading font-bold text-lg">
                Mint Library
              </span>
            </div>

            <p className="text-mint-100 text-sm leading-6">
              Serving our community with knowledge, resources, and connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-mint-100 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-mint-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="hover:text-mint-400 transition-colors"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="hover:text-mint-400 transition-colors"
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-mint-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold mb-4">
              Hours
            </h3>

            <ul className="space-y-1 text-mint-100 text-sm">
              <li>Tuesday - Friday: 10AM - 5PM</li>
              <li>Saturday: 11AM - 1PM</li>
              <li>Sunday and Monday: Closed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-mint-100 text-sm">
              <li>
                <a
                  href="tel:+2349166770756"
                  className="hover:text-mint-400 transition-colors"
                >
                  +234 916 677 0756
                </a>
              </li>

              <li>
                <a
                  href="mailto:mintcommunitylibrary@gmail.com"
                  className="hover:text-mint-400 transition-colors"
                >
                  mintcommunitylibrary@gmail.com
                </a>
              </li>

              <li className="leading-5">
                3 Sir BE OBIELI STREET
                <br />
                ACHINA, AGUATA LGA
                <br />
                ANAMBRA STATE
                <br />
                NIGERIA
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-mint-800 pt-8 flex justify-center gap-6">

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@mintcommunitylibr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint-400 hover:text-mint-300 transition-colors"
            aria-label="Mint Community Library on TikTok"
          >
            <span className="sr-only">TikTok</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.589 6.686a4.793 4.793 0 01-4.754-4.233V2h-3.595v13.967a2.8 2.8 0 11-2.8-2.8c.184 0 .364.018.538.052v-3.65a6.478 6.478 0 00-.538-.022A6.42 6.42 0 1014.835 15V8.725a8.36 8.36 0 004.754 1.47V6.686z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="text-mint-400 hover:text-mint-300 transition-colors"
            aria-label="Mint Community Library on Facebook"
          >
            <span className="sr-only">Facebook</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.002 10.125 11.927v-8.432H7.078v-3.522h3.047V9.369c0-3.039 1.791-4.719 4.533-4.719 1.312 0 2.686.236 2.686.236v2.973h-1.515c-1.491 0-1.956.93-1.956 1.886v2.261h3.328l-.532 3.522h-2.796V24C19.612 23.075 24 18.092 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="text-mint-400 hover:text-mint-300 transition-colors"
            aria-label="Mint Community Library on Instagram"
          >
            <span className="sr-only">Instagram</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.25a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z" />
            </svg>
          </a>

        </div>

        {/* Copyright */}
        <div className="border-t border-mint-800 mt-8 pt-8 text-center text-mint-200 text-sm">
          <p>
            &copy; 2026 Mint Community Library. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
```

