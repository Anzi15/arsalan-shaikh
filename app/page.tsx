"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import YouthVolunteerForm from "@/components/YouthVolunteerForm";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const numberCount: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.5, type: "spring", stiffness: 100 }
  })
};

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <motion.p
      ref={ref}
      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.p>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Gallery images for marquee section
const marqueeGalleryImages = [
  { id: 1, src: "/gallery/1.jpeg", title: "Community Engagement", category: "Community" },
  { id: 2, src: "/gallery/2.jpeg", title: "Community Engagement", category: "Community" },
  { id: 3, src: "/gallery/3.jpeg", title: "Community Engagement", category: "Community" },
  { id: 4, src: "/gallery/4.jpeg", title: "Community Engagement", category: "Community" },
  { id: 5, src: "/gallery/5.jpeg", title: "Community Engagement", category: "Community" },
  { id: 6, src: "/gallery/6.jpeg", title: "Community Engagement", category: "Community" },
  { id: 7, src: "/gallery/7.jpeg", title: "Community Engagement", category: "Community" },
  { id: 8, src: "/gallery/8.jpeg", title: "Community Engagement", category: "Community" },
  { id: 9, src: "/gallery/9.jpeg", title: "Community Engagement", category: "Community" },
  { id: 10, src: "/gallery/10.jpeg", title: "Community Engagement", category: "Community" },
  { id: 11, src: "/gallery/11.jpeg", title: "Community Engagement", category: "Community" },
  { id: 12, src: "/gallery/12.jpeg", title: "Community Engagement", category: "Community" },
  { id: 13, src: "/gallery/13.jpeg", title: "Community Engagement", category: "Community" },
  { id: 14, src: "/gallery/14.jpeg", title: "Community Engagement", category: "Community" },
  { id: 15, src: "/gallery/15.jpeg", title: "Community Engagement", category: "Community" },
  { id: 16, src: "/gallery/16.jpeg", title: "Community Engagement", category: "Community" },
  { id: 17, src: "/gallery/17.jpeg", title: "Community Engagement", category: "Community" },
  { id: 18, src: "/gallery/18.jpeg", title: "Community Engagement", category: "Community" },
  { id: 19, src: "/gallery/19.jpeg", title: "Community Engagement", category: "Community" },
  { id: 20, src: "/gallery/20.jpeg", title: "Community Engagement", category: "Community" },
  { id: 21, src: "/gallery/21.jpeg", title: "Community Engagement", category: "Community" },
  { id: 22, src: "/gallery/22.jpeg", title: "Community Engagement", category: "Community" },
];

// Marquee Row Component
const MarqueeRow = ({ images, direction = "left", speed = 30 }: { images: typeof marqueeGalleryImages; direction?: "left" | "right"; speed?: number }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, idx) => (
          <div
            key={`${image.id}-${idx}`}
            className="relative w-72 h-48 md:w-80 md:h-56 flex-shrink-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-sm font-bold">{image.title}</h3>
              <span className="inline-block mt-1 px-2 py-0.5 bg-yellow-500 text-black text-xs rounded-full">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block px-4 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/50"
              >
                <span className="text-yellow-400 text-sm font-semibold">⚡ Leading Sukkur Forward</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Working for a Better
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Sukkur, Together!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Join Barrister Arsalan Shaikh in building a stronger, more progressive Sukkur.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-500/30 transition-all duration-300"
              >
                Get Involved →
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/plf pic click.webp"
                  alt="Sukkur City"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-500 rounded-full blur-2xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <AnimatedSection className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">🔥 Highlighted Events</h2>
            <Link href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
              View all events →
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 p-5 z-20"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-200">{event.description}</p>
                </motion.div>
                <motion.div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${event.image}")` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Marquee Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📸 Our
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Gallery Moments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into our community engagement, events, and memorable moments
            </p>
          </motion.div>
        </div>

        {/* Row 1 - Left to Right */}
        <MarqueeRow images={marqueeGalleryImages} direction="left" speed={35} />

        {/* Row 2 - Right to Left */}
        <MarqueeRow images={marqueeGalleryImages} direction="right" speed={35} />

        <div className="text-center mt-10">
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              View Full Gallery →
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Master Every Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/41RDQj0d24Q?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&playsinline=1&rel=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full"
                />
              </motion.div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-64 h-64 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-20" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Transforming Sukkur through
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Leadership</span>
              </h2>
              <p className="text-gray-600 text-lg">
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-200 py-2 hover:border-yellow-500 transition-colors"
                  >
                    <p className="font-medium">{area}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              "
            </motion.div>
            <blockquote className="text-2xl md:text-3xl italic mb-8 text-gray-700">
              "Under Mayor Arsalan Shaikh's leadership, Sukkur has experienced remarkable development, setting new benchmarks for urban progress."
            </blockquote>
            <div className="flex justify-center gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Youth Volunteer Form */}
      <YouthVolunteerForm />

      {/* Results Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Achievements Under
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Mayor Arsalan Shaikh</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 27, suffix: "", label: "Age at First Mayoral Election" },
              { value: 2, suffix: "", label: "Terms as Mayor" },
              { value: 2023, suffix: "", label: "Year Re-elected" },
              { value: 87, suffix: "K+", label: "Followers on Social Media" },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={numberCount}
                className="text-center group"
              >
                <div className="relative">
                  {item.suffix === "K+" ? (
                    <AnimatedCounter target={item.value} suffix={item.suffix} />
                  ) : (
                    <motion.p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      {item.value}{item.suffix}
                    </motion.p>
                  )}
                </div>
                <p className="text-sm mt-3 text-gray-600 group-hover:text-gray-900 transition-colors">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Beautification Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Beautification of
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> City Sukkur</span>
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {[
              { id: 1, name: "World Globe Monument Sukkur", img: "/sukkur globe.jpg", context: "The modern symbol of the beauty and modernity of Sukkur" },
              { id: 2, name: "New Year on Lansdowne Bridge", img: "/new year bridge.jpg", context: "A historic bridge connecting Sukkur and Rohri, known for its impressive engineering and scenic views." },
              { id: 3, name: "Pakistan's Biggest Flag", img: "/pakistan-biggest-flag.jpg", context: "A massive national flag installed in Sukkur, representing patriotism and pride." },
              { id: 4, name: "Lucas Park", img: "/lucas-park.jpg", context: "A beautifully maintained park in Sukkur, offering a peaceful retreat with green spaces." }
            ].map((spot, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 p-4 z-20"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-sm md:text-base font-bold">{spot.name}</h3>
                  <p className="text-white/80 text-xs mt-1">{spot.context.substring(0, 60)}...</p>
                </motion.div>
                <motion.div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${spot.img}")` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership in
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Action</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover the initiatives and vision of Mayor Arsalan Shaikh as he leads Sukkur towards a brighter future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-10 rounded-full shadow-lg shadow-yellow-500/30 transition-all duration-300 text-lg"
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Upcoming Events Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="max-w-2xl"
          >
            <p className="text-yellow-400 text-sm mb-2 tracking-wider">📅 UPCOMING EVENTS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Building Sukkur's Future Together
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Join Mayor Arsalan Shaikh at the next community event to discuss and contribute to Sukkur's development plans.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Register Now →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}