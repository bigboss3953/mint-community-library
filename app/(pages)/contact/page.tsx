'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mint-600 to-mint-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-mint-100">
            We'd love to hear from you. Contact us with questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="card text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-heading font-bold text-lg text-mint-900 mb-2">Address</h3>
              <p className="text-mint-700">
                123 Community Lane<br />
                Our City, ST 12345
              </p>
            </div>

            {/* Phone */}
            <div className="card text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-heading font-bold text-lg text-mint-900 mb-2">Phone</h3>
              <p className="text-mint-700">
                <a href="tel:+1234567890" className="hover:text-mint-600">
                  (123) 456-7890
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="card text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="font-heading font-bold text-lg text-mint-900 mb-2">Email</h3>
              <p className="text-mint-700">
                <a href="mailto:info@mintlibrary.com" className="hover:text-mint-600">
                  info@mintlibrary.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-mint-50 rounded-lg p-8 text-center mb-16">
            <h3 className="font-heading font-bold text-2xl text-mint-900 mb-6">Hours of Operation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-mint-700">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p>10:00 AM - 5:00 PM</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Send Us a Message</h2>
          <p className="text-center text-mint-700 mb-12">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-mint-200">
            <div className="mb-6">
              <label htmlFor="name" className="block text-mint-900 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-mint-300 rounded-lg focus:outline-none focus:border-mint-600 focus:ring-2 focus:ring-mint-200"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-mint-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-mint-300 rounded-lg focus:outline-none focus:border-mint-600 focus:ring-2 focus:ring-mint-200"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-mint-900 font-medium mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-mint-300 rounded-lg focus:outline-none focus:border-mint-600 focus:ring-2 focus:ring-mint-200"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-mint-900 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-mint-300 rounded-lg focus:outline-none focus:border-mint-600 focus:ring-2 focus:ring-mint-200"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
