export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mint-600 to-mint-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-xl text-mint-100">
            Learn about Mint Community Library and our mission
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Our Mission</h2>
          <p className="text-lg text-mint-700 leading-relaxed mb-8 text-center">
            At Mint Community Library, we are committed to fostering lifelong learning, promoting community connection, and providing equitable access to information and resources for all members of our community, regardless of age, background, or ability.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Learning</h3>
              <p className="text-mint-700">We empower people to discover, learn, and grow throughout their lives.</p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Community</h3>
              <p className="text-mint-700">We build meaningful connections and foster a sense of belonging.</p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">♿</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Equity</h3>
              <p className="text-mint-700">We ensure equal access to resources and opportunities for all.</p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Growth</h3>
              <p className="text-mint-700">We support personal, professional, and community development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-mint-700 leading-relaxed">
            <p>
              Mint Community Library was founded with a simple yet powerful vision: to create a gathering place where knowledge, creativity, and community flourish. What began as a small neighborhood initiative has grown into a vibrant hub serving thousands of community members each year.
            </p>
            <p>
              Today, we continue to evolve, expanding our offerings and reaching more people. We're proud of our diverse programs, dedicated staff, and most importantly, our engaged community members who make our library truly special.
            </p>
            <p>
              Whether you're seeking knowledge, connection, or a quiet space to think, Mint Community Library is here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Meet Our Team</h2>
          <p className="text-center text-mint-700 text-lg max-w-2xl mx-auto mb-12">
            Our dedicated team of librarians, educators, and community specialists work together to create an welcoming environment for everyone.
          </p>
          <div className="bg-white rounded-lg p-8 border border-mint-200 text-center">
            <p className="text-mint-600 mb-4">👥 Our team is ready to help</p>
            <button className="btn-primary">
              Learn More About Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
