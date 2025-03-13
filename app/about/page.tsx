import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
{/* Hero Section */}
<section className="relative bg-black text-white">
  <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">About Barrister Arsalan Islam Shaikh</h1>
      <p className="text-xl text-gray-300">
        Spokesperson for Government of Sindh, Mayor of Sukkur, and a dedicated advocate for urban development, governance, and public service.
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
          src="/luxury-mayor-of-sukkur.jpg" // Update with actual image path
          alt="Barrister Arsalan Islam Shaikh"
          width={400}
          height={600}
          className="rounded-lg aspect-[9/16] object-cover shadow-lg"
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-6">The Journey of Barrister Arsalan Islam Shaikh</h2>
        <div className="space-y-4 text-lg">
          <p>
            Barrister Arsalan Islam Shaikh, currently serving as the Spokesperson for the Government of Sindh and Mayor of Sukkur, has a deep-rooted legacy in politics and governance. His journey in public service began with his election as the unopposed Mayor of Sukkur in 2016, a position he holds again after his re-election in 2023.
          </p>
          <p>
            Coming from a family of influential political leaders, his father, mother, and brother have all played significant roles in shaping Sindh’s political landscape. His father was twice elected as Mayor of Sukkur and later became a Federal/State Minister. His mother, Mrs. Noreen Islam Shaikh, served as an MPA, while his brother, Nauman Islam Shaikh, has been elected as MNA multiple times.
          </p>
          <p>
            A highly educated legal expert, Mr. Shaikh completed his LLB from the University of London, earned his BAR AT LAW from Lincoln's Inn, and later pursued an LLM from the University of the West of England. His expertise in law and governance, combined with his dedication to urban development, has enabled him to lead multiple initiatives for the betterment of Sukkur.
          </p>
          <p>
            With a vision to transform Sukkur’s infrastructure, healthcare, and education sectors, Mr. Shaikh continues to work tirelessly towards creating a sustainable and prosperous future for the city.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Timeline Section */}
<section className="py-16 hidden md:flex bg-gray-100" id="education">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Life & Education Timeline</h2>

    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

      {/* Timeline items */}
      {[
        {
          year: "1986",
          title: "Born into a Political Legacy",
          description: "Born into a family with a strong political background in Sindh.",
        },
        {
          year: "2007",
          title: "LLB from University of London",
          description: "Completed his Bachelor of Laws (LLB) from the University of London.",
        },
        {
          year: "2008",
          title: "BAR AT LAW from Lincoln’s Inn",
          description: "Became a Barrister after completing his legal training at Lincoln’s Inn, UK.",
        },
        {
          year: "2010",
          title: "LLM from University of the West of England",
          description: "Pursued a Master of Laws (LLM) degree, specializing in international law.",
        },
        {
          year: "2016",
          title: "Elected as Mayor of Sukkur",
          description: "Became the unopposed Mayor of Sukkur, focusing on urban development and infrastructure.",
        },
        {
          year: "2023",
          title: "Re-elected as Mayor of Sukkur",
          description: "Won the elections again, continuing his mission to transform Sukkur.",
        },
        {
          year: "2024",
          title: "Appointed as Spokesperson for Government of Sindh",
          description: "Took on a key leadership role in provincial governance.",
        },
      ].map((item, index) => (
        <div key={index} className={`relative mb-12 ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}>
          <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-blue-600 font-bold">{item.year}</span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-16 bg-gray-100 md:hidden flex" id="education">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Life & Education Timeline</h2>

    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line (hidden on small screens) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full hidden md:block"></div>

      {/* Timeline items */}
      {[
        {
          year: "1986",
          title: "Born into a Political Legacy",
          description: "Born into a family with a strong political background in Sindh.",
        },
        {
          year: "2007",
          title: "LLB from University of London",
          description: "Completed his Bachelor of Laws (LLB) from the University of London.",
        },
        {
          year: "2008",
          title: "BAR AT LAW from Lincoln’s Inn",
          description: "Became a Barrister after completing his legal training at Lincoln’s Inn, UK.",
        },
        {
          year: "2010",
          title: "LLM from University of the West of England",
          description: "Pursued a Master of Laws (LLM) degree, specializing in international law.",
        },
        {
          year: "2016",
          title: "Elected as Mayor of Sukkur",
          description: "Became the unopposed Mayor of Sukkur, focusing on urban development and infrastructure.",
        },
        {
          year: "2023",
          title: "Re-elected as Mayor of Sukkur",
          description: "Won the elections again, continuing his mission to transform Sukkur.",
        },
        {
          year: "2024",
          title: "Appointed as Spokesperson for Government of Sindh",
          description: "Took on a key leadership role in provincial governance.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`relative mb-12 ${
            index % 2 === 0 ? "md:flex md:justify-end md:text-right" : "md:flex md:justify-start md:text-left"
          }`}
        >
          {/* Timeline Indicator (Only visible on medium and larger screens) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>

          {/* Content Box */}
          <div
            className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-8"
            }`}
          >
            <span className="text-blue-600 font-bold">{item.year}</span>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




{/* Philosophy Section */}
<section className="py-16 bg-white" id="philosophy">
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
        <h3 className="text-xl font-bold mb-4">Commitment to Justice</h3>
        <p className="text-gray-600">
          The rule of law is the foundation of a just society. Barrister Arsalan Islam Shaikh believes in upholding
          justice and fairness for all, ensuring that every citizen has access to their legal rights.
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
        <h3 className="text-xl font-bold mb-4">Leadership Through Service</h3>
        <p className="text-gray-600">
          True leadership is about serving the people. As Mayor of Sukkur, he has dedicated himself to improving
          infrastructure, governance, and social welfare for the betterment of the community.
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
        <h3 className="text-xl font-bold mb-4">A Vision for Progress</h3>
        <p className="text-gray-600">
          Progress is driven by vision and action. His mission is to create sustainable development, empower youth,
          and build a brighter future for Sindh through strategic planning and reform.
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
              { name: "Ali Raza Pathan", title: "Advisor ", image: "/team/ali raza pathan.png" },
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
      To serve the people of Sukkur with integrity, ensuring justice, progress, and a brighter future for all through
      dedicated leadership and unwavering commitment.
    </p>
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Our Vision</h3>
          <p>
            To build a prosperous Sukkur where law, governance, and development work hand in hand to uplift every citizen,
            ensuring equal opportunities and sustainable growth.
          </p>
        </div>
        <div className="bg-black bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Our Values</h3>
          <p>
            Justice, Leadership, Transparency, Service, and Progress—guiding principles in our commitment to the people.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}

