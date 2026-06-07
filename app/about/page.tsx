"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import {
  Cake,
  GraduationCap,
  Scale,
  BookOpen,
  Landmark,
  Trophy,
  Mic2,
  Handshake,
  Rocket,
  Star,
  Gem,
  Gavel
} from "lucide-react";

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
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } }
};

// Animated Section Component
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

// Parallax Section Component
const ParallaxSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const timelineEvents = [
    { year: "1986", title: "Born into a Political Legacy", description: "Born into a family with a strong political background in Sindh.", icon: <Cake className="w-8 h-8 text-yellow-500" /> },
    { year: "2007", title: "LLB from University of London", description: "Completed his Bachelor of Laws (LLB) from the University of London.", icon: <GraduationCap className="w-8 h-8 text-yellow-500" /> },
    { year: "2008", title: "BAR AT LAW from Lincoln's Inn", description: "Became a Barrister after completing his legal training at Lincoln's Inn, UK.", icon: <Gavel className="w-8 h-8 text-yellow-500" /> },
    { year: "2010", title: "LLM from University of the West of England", description: "Pursued a Master of Laws (LLM) degree, specializing in international law.", icon: <BookOpen className="w-8 h-8 text-yellow-500" /> },
    { year: "2016", title: "Elected as Mayor of Sukkur", description: "Became the unopposed Mayor of Sukkur, focusing on urban development and infrastructure.", icon: <Landmark className="w-8 h-8 text-yellow-500" /> },
    { year: "2023", title: "Re-elected as Mayor of Sukkur", description: "Won the elections again, continuing his mission to transform Sukkur.", icon: <Trophy className="w-8 h-8 text-yellow-500" /> },
    { year: "2024", title: "Appointed as Spokesperson for Government of Sindh", description: "Took on a key leadership role in provincial governance.", icon: <Mic2 className="w-8 h-8 text-yellow-500" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxSection className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
          </motion.div>
        </ParallaxSection>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-4 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/50 mb-6"
            >
              <span className="text-yellow-400 text-sm font-semibold">✨ About the Leader</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Barrister Arsalan
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"> Islam Shaikh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Spokesperson for Government of Sindh, Mayor of Sukkur, and a dedicated advocate for urban development,
              governance, and public service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/luxury-mayor-of-sukkur.jpg"
                  alt="Barrister Arsalan Islam Shaikh"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 w-64 h-64 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-20 -z-10"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The Journey of
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Barrister Arsalan Islam Shaikh</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-lg">
                <motion.p variants={fadeInUp}>
                  Barrister Arsalan Islam Shaikh, currently serving as the <span className="font-semibold text-yellow-600">Spokesperson for the Government of Sindh</span> and Mayor of Sukkur,
                  has a deep-rooted legacy in politics and governance. His journey in public service began with his election
                  as the unopposed Mayor of Sukkur in 2016, a position he holds again after his re-election in 2023.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Coming from a family of influential political leaders, his father, mother, and brother have all played
                  significant roles in shaping Sindh's political landscape. His father was twice elected as Mayor of Sukkur
                  and later became a Federal/State Minister.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  A highly educated legal expert, Mr. Shaikh completed his <span className="font-semibold text-yellow-600">LLB from the University of London</span>,
                  earned his BAR AT LAW from Lincoln's Inn, and later pursued an LLM from the University of the West of England.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100" id="education">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Life &
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Education Timeline</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A journey of dedication, education, and public service
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-full hidden md:block"
            />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-16 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} relative`}>
                  <div className={`w-full md:w-[90%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{event.icon}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-4 border-white shadow-lg hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white" id="philosophy">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Philosophy</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guiding principles that drive our leadership and service
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Scale className="w-8 h-8" />, title: "Commitment to Justice", description: "The rule of law is the foundation of a just society. Barrister Arsalan Islam Shaikh believes in upholding justice and fairness for all, ensuring that every citizen has access to their legal rights." },
              { icon: <Handshake className="w-8 h-8" />, title: "Leadership Through Service", description: "True leadership is about serving the people. As Mayor of Sukkur, he has dedicated himself to improving infrastructure, governance, and social welfare for the betterment of the community." },
              { icon: <Rocket className="w-8 h-8" />, title: "A Vision for Progress", description: "Progress is driven by vision and action. His mission is to create sustainable development, empower youth, and build a brighter future for Sindh through strategic planning and reform." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 overflow-hidden" id="mission">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              To serve the people of Sukkur with integrity, ensuring justice, progress, and a brighter future for all through
              dedicated leadership and unwavering commitment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-yellow-400 w-8 h-8" />
                <h3 className="text-2xl font-bold text-yellow-400">Our Vision</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                To build a prosperous Sukkur where law, governance, and development work hand in hand to uplift every citizen,
                ensuring equal opportunities and sustainable growth.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Gem className="text-yellow-400 w-8 h-8" />
                <h3 className="text-2xl font-bold text-yellow-400">Our Values</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Justice, Leadership, Transparency, Service, and Progress—guiding principles in our commitment to the people.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}