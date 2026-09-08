export default function Resources() {
  const resources = [
    {
      category: 'Digital Access',
      items: [
        'E-Books and Audiobooks',
        'Online Databases',
        'Streaming Services (Music & Video)',
        'Digital Magazine Archive',
      ],
    },
    {
      category: 'Learning & Development',
      items: [
        'Online Courses & Tutorials',
        'Research Databases',
        'Career Development Resources',
        'Language Learning Programs',
      ],
    },
    {
      category: 'Community Resources',
      items: [
        'Job Listings & Support',
        'Mental Health Resources',
        'Financial Literacy Guides',
        'Local Community Information',
      ],
    },
    {
      category: 'Technical Support',
      items: [
        'Computer & WiFi Access',
        'Tech Help Desk',
        'Software Training',
        'Device Borrowing Program',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mint-600 to-mint-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Resources</h1>
          <p className="text-xl text-mint-100">
            Access a world of knowledge and support
          </p>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resources.map((resource, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-mint-200">
                <h3 className="font-heading font-bold text-2xl text-mint-900 mb-6">
                  {resource.category}
                </h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-mint-600 font-bold mt-1">✓</span>
                      <span className="text-mint-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">How to Access Our Resources</h2>
          <p className="section-subtitle text-center text-mint-600 mb-8">
            Our resources are available both in-person and digitally during our hours of operation.
          </p>

          <div className="bg-mint-50 rounded-lg p-8 mb-8">
            <h3 className="font-heading font-bold text-lg text-mint-900 mb-4">Get Started:</h3>
            <ol className="space-y-3 text-mint-700">
              <li>1. Visit us during our operating hours</li>
              <li>2. Browse our extensive collection of resources</li>
              <li>3. Ask our librarians about specific resources you need</li>
              <li>4. Explore our digital offerings online</li>
            </ol>
          </div>

          <div className="text-center">
            <p className="text-mint-700 mb-6">
              Have questions about our resources? <a href="/contact" className="text-mint-600 hover:text-mint-700 font-medium">Contact us today</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
