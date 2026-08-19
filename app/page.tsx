import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Community Section */}
      <section className="bg-mint-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">More Than Books</h2>
            <p className="section-subtitle text-mint-600">
              Mint Community Library is a thriving hub for learners, creators, and community members of all ages.
            </p>
            <p className="text-lg text-mint-700 leading-relaxed mb-8">
              We believe in the power of knowledge, connection, and community. Our library offers programs, classes, resources, and spaces where people can learn, grow, and connect with one another.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Vast Collection</h3>
              <p className="text-mint-700">Explore thousands of books, digital resources, and media to fuel your curiosity.</p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Programs & Classes</h3>
              <p className="text-mint-700">Learn new skills with our diverse range of educational programs and workshops.</p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">Community Space</h3>
              <p className="text-mint-700">Connect with neighbors and build meaningful relationships in our welcoming environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-mint-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-mint-100 mb-8">
            Get involved, explore our resources, and be part of something special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-mint-600 rounded-lg font-medium hover:bg-mint-50 transition-colors">
              Get Your Library Card
            </button>
            <button className="px-8 py-3 bg-mint-400 text-white rounded-lg font-medium hover:bg-mint-500 transition-colors">
              Visit Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
