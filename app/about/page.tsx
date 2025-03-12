import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tony Robbins</h1>
            <p className="text-xl text-gray-300">
              Entrepreneur, #1 NY Times Bestselling Author, Philanthropist, and the Nation's #1 Life and Business
              Strategist
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Tony Robbins"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">The Journey of Tony Robbins</h2>
              <div className="space-y-4 text-lg">
                <p>
                  For more than 4 decades, Tony Robbins has served as an advisor to leaders around the world. A
                  recognized authority on the psychology of leadership, negotiations, organizational turnaround, and
                  peak performance, he has been honored consistently for his strategic intellect and humanitarian
                  endeavors.
                </p>
                <p>
                  His companies have more than 1,200 employees across 8 sectors including biotech, finance and
                  non-profit. Through the Tony Robbins Foundation and his matching funds, Tony has provided over 800
                  million meals in his partnership with Feeding America. He lives in Palm Beach, Florida.
                </p>
                <p>
                  Tony Robbins' commitment to creating an enduring legacy that will impact the world is surpassed only
                  by his passion for family as a father of four children and a grandfather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100" id="education">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Life & Education Timeline</h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>

            {/* Timeline items */}
            {[
              {
                year: "1960",
                title: "Born in North Hollywood",
                description: "Anthony J. Mahavoric was born on February 29, 1960.",
              },
              {
                year: "1978",
                title: "First Seminar",
                description: "At age 18, Tony began promoting seminars for Jim Rohn.",
              },
              {
                year: "1983",
                title: "Discovered Neuro-Linguistic Programming",
                description: "Tony learned NLP from co-founder John Grinder and began incorporating it into his work.",
              },
              {
                year: "1988",
                title: "First Infomercial",
                description: "Released his first infomercial, Personal Power, which sold more than 40 million copies.",
              },
              {
                year: "1991",
                title: "Foundation Established",
                description:
                  "Created the Anthony Robbins Foundation to empower students and prisoners through food drives and learning programs.",
              },
              {
                year: "1997",
                title: "Leadership Academy",
                description:
                  "Started the Leadership Academy seminar, focusing on helping leaders improve their performance.",
              },
              {
                year: "2014",
                title: "Money: Master the Game",
                description: "Published his #1 New York Times bestselling book on financial freedom.",
              },
              {
                year: "2017",
                title: "Unshakeable",
                description:
                  "Released another #1 New York Times bestseller on financial freedom and creating peace of mind.",
              },
              {
                year: "2020",
                title: "Virtual Events",
                description:
                  "Adapted his live events to virtual platforms, reaching millions during the global pandemic.",
              },
            ].map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}>
                <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-yellow-500 font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">The Power of Decision</h3>
              <p className="text-gray-600">
                It's in your moments of decision that your destiny is shaped. Tony believes that the decisions you make
                in moments of crisis define who you become.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">The Science of Achievement</h3>
              <p className="text-gray-600">
                Success leaves clues. Tony has studied the patterns of achievement and distilled them into strategies
                anyone can apply to achieve extraordinary results.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">The Art of Fulfillment</h3>
              <p className="text-gray-600">
                Success without fulfillment is the ultimate failure. Tony teaches that true happiness comes from growing
                and giving in a meaningful way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100" id="team">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Tony Robbins", title: "Founder & Chairman", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sage Robbins", title: "Partner & Co-Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "John Smith", title: "CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Johnson", title: "President of Events", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Michael Chen",
                title: "Chief Marketing Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Jessica Williams", title: "Head of Coaching", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-indigo-900 text-white" id="mission">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            To empower individuals and organizations to create an extraordinary quality of life — filled with meaning,
            passion, and fulfillment.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p>
                  To create a world where every person experiences true freedom, joy, and the ability to contribute
                  meaningfully to others.
                </p>
              </div>
              <div className="bg-black bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p>
                  Excellence, Growth, Compassion, Integrity, and Passion in everything we do to serve our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

