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
                src="/mint-library-logo.png"
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
                <Link href="/" className="hover:text-mint-400 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/programs" className="hover:text-mint-400 transition-colors">
                  Programs
                </Link>
              </li>

              <li>
                <Link href="/resources" className="hover:text-mint-400 transition-colors">
                  Resources
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-mint-400 transition-colors">
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
              <path d="M19.589 6.686a4.793 4.793 0 01-4.754-4.233V2h-3.595v13.967a2.8 2.8 0 11-2.8-2.8c.184 0 .364.018.538.052v-3.65a6.478 6.478 0 00-.538-.022A6.42 6.42 0 1014.835 15V8.725a8.36 8.36 0 004.754-2.039v-3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mintcommunitylibrary"
            target="_blank"
            rel="noopener noreferrer"
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
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mintcommunitylibrary"
            target="_blank"
            rel="noopener noreferrer"
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
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
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
