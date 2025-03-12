import Image from "next/image"
import Link from "next/link"
import ReactPlayer from 'react-player'
import NewsletterForm from "./components/Newletter"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
{/* Hero Section */}
<section className="relative bg-black text-white">
  <div className="container mx-auto px-4 relative z-10 md:flex justify-between">
    <div className="md:w-1/2 py-16 md:py-24 px-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Working for a Better Sukkur, Together!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Join Barrister Arsalan Shaikh in building a stronger, more progressive Sukkur.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full mt-4">
        Get Involved
      </button>
    </div>
    <div className="md:w-1/2 md:px-10">
    <Image
      src="/plf pic click.webp" // Replace with actual image
      alt="Sukkur City"
      width={500}
      height={400}
      className=""

    />
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90">
  </div>
</section>


      {/* Events Section */}
{/* Events Section */}
<section className="bg-black text-white py-12">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">Highlighted Events</h2>
      <Link href="#" className="text-sm text-yellow-500 hover:underline">
        View all events
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        {
          title: "Pakistan Literature Festival Sukkur Chapter 2",
          description: "Barrister Arsalan Shaikh shared his thoughts and was interviewed by Shaista Lodhi.",
          image: "/events/plf event.webp",
        },
        {
          title: "Meeting with Bilawal Bhutto Zardari",
          description: "Discussed development projects and issues in Sukkur with the PPP Chairman.",
          image: "/events/meeting with bilawal.webp",
        },
        {
          title: "Benazir Bhutto National Throwball Championship",
          description: "Concluded successfully with participation from teams across Pakistan.",
          image: "/events/throw ball.jpg",
        },
      ].map((event, index) => (
        <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg group">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 p-3 z-20">
            <h3 className="text-sm md:text-base font-bold">{event.title}</h3>
            <p className="text-xs md:text-sm">{event.description}</p>
          </div>
          <div
            className="w-full h-full bg-gray-700 bg-cover bg-center"
            style={{ backgroundImage: `url("${event.image}")` }}
          ></div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Master Every Area Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 max-w-full mb-8 md:mb-0">
        {/* <Image
          src="/arsalan_shaikh" // Replace with actual image
          alt="Barrister Arsalan Shaikh"
          width={500}
          height={400}
          className="rounded-lg  max-w-screen"
        /> */}
  
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/41RDQj0d24Q?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&playsinline=1&rel=0" 
    frameBorder="0" 
    allow="autoplay; encrypted-media" 
    allowFullScreen>
</iframe>



      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transforming Sukkur through Leadership
        </h2>
        <p className="mb-4 text-gray-700">
          Barrister Arsalan Shaikh is committed to improving every aspect of governance, from 
          infrastructure to public welfare. His vision is to make Sukkur a thriving and progressive city.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Infrastructure Development",
            "Public Welfare",
            "Youth Empowerment",
            "Education Reform",
            "Healthcare Initiatives",
            "Community Engagement",
            "Sustainable Growth",
          ].map((area, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <blockquote className="text-xl md:text-2xl italic mb-6">
        "Under Mayor Arsalan Shaikh's leadership, Sukkur has experienced remarkable development, setting new benchmarks for urban progress."
      </blockquote>
      <div className="flex justify-center space-x-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Robbins equals results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-yellow-500">300%</p>
              <p className="text-sm mt-2">Business Growth</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-yellow-500">100%</p>
              <p className="text-sm mt-2">Relationship Improvement</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-yellow-500">50+</p>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-yellow-500">1M+</p>
              <p className="text-sm mt-2">Lives Changed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((coach, index) => (
              <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg group">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-3 z-20">
                  <h3 className="text-white text-sm md:text-base font-bold">Coach {index + 1}</h3>
                  <p className="text-white text-xs">Expert in Growth</p>
                </div>
                <div className="w-full h-full bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Unshakeable Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become unshakeable</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Learn the strategies and mindset to overcome any challenge and create the life you desire.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-sm text-yellow-500 mb-2">Upcoming events</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Create life according to your terms</h2>
              <p className="mb-8">Join Tony Robbins at his next live event and transform your life forever.</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent opacity-90"></div>
      </section>

      {/* Coaching Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert guidance for your path</h2>
              <p className="mb-6">
                Work with Tony's certified coaches to achieve breakthrough results in any area of your life.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-700 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Explore products & programs</h2>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6">Mobile Apps</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((app, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-200 rounded-xl h-64 mb-4 mx-auto max-w-[150px]"></div>
                  <h4 className="font-medium">App {index + 1}</h4>
                  <p className="text-sm text-gray-600">Transform your life</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Top Rated Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <h4 className="font-bold mb-2">Product {index + 1}</h4>
                    <p className="text-sm text-gray-600 mb-4">Transform your mindset and achieve success</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">5.0 (120 reviews)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

