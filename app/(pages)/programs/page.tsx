export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Kids Reading Circle',
      description: 'Interactive storytelling and reading sessions for children ages 4-8.',
      schedule: 'Saturdays, 11:00 AM',
      icon: '👧',
    },
    {
      id: 2,
      title: 'Teen Tech Lab',
      description: 'Learn coding, digital design, and technology skills. Perfect for ages 13-17.',
      schedule: 'Tuesday - Friday, 3:00 PM - 5:00 PM',
      icon: '💻',
    },
    {
      id: 3,
      title: 'Community Events',
      description: 'Book launches, author talks, cultural events, and community celebrations.',
      schedule: 'Throughout the year',
      icon: '🎉',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mint-600 to-mint-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Programs & Classes</h1>
          <p className="text-xl text-mint-100">
            Discover learning opportunities for all ages and interests
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="card">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="font-heading font-bold text-xl text-mint-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-mint-700 mb-4">{program.description}</p>
                <p className="text-sm text-mint-600 font-medium mb-4">📅 {program.schedule}</p>
                <button className="btn-primary text-sm w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Can't find what you're looking for?</h2>
          <p className="text-lg text-mint-700 mb-8">
            We're always happy to discuss custom programs and classes tailored to your needs.
          </p>
          <button className="btn-primary">
            Contact Us About Custom Programs
          </button>
        </div>
      </section>
    </>
  )
}
