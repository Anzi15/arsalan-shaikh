"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

// Animation variants matching home page
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    alert("Thank you for your message! We'll get back to you soon.");
    event.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "House No.C-416/2, Mohalla Upper Queens Road, Sukkur, Pakistan",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(+92) 300 3334333",
      subtitle: "Mon-Fri, 9AM to 6PM",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "shaikharsalan@hotmail.com",
      subtitle: "We'll respond within 24hrs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", color: "hover:bg-[#1877f2]" },
    { icon: Twitter, name: "Twitter", href: "#", color: "hover:bg-[#1da1f2]" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:bg-[#e4405f]" },
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "hover:bg-[#0a66c2]" },
    { icon: Youtube, name: "YouTube", href: "#", color: "hover:bg-[#ff0000]" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
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

        <div className="container mx-auto px-4 relative z-10 min-h-[60vh] flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/50 mb-6"
            >
              <Mail className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">Get in Touch</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Start a
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Conversation</span>
            </h1>
            <p className="text-xl text-gray-300">
              Whether you have a question about our initiatives, want to collaborate, or need assistance —
              we&apos;re here to help. Reach out and let&apos;s make a difference together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.details}</p>
                {info.subtitle && (
                  <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:w-1/2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Send Us a
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our events, initiatives, or anything else? Fill out the form and our team will get back to you as soon as possible.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="events">Events & Gatherings</option>
                      <option value="initiatives">Community Initiatives</option>
                      <option value="collaboration">Collaboration Opportunities</option>
                      <option value="support">Support & Assistance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-10 h-full text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  We value your input and look forward to hearing from you. Whether it's a question, feedback, or collaboration idea — reach out anytime.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Office Address</p>
                      <p className="text-gray-300">House No.C-416/2, Mohalla Upper Queens Road, Sukkur, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Phone Number</p>
                      <p className="text-gray-300">(+92) 300 3334333</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Email Address</p>
                      <p className="text-gray-300">shaikharsalan@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-400">Office Hours</p>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400 text-sm">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-white/20">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-5 bg-yellow-500/10 rounded-2xl border border-yellow-500/30"
                >
                  <p className="text-yellow-400 italic text-center">
                    "Together, we can build a stronger, more progressive Sukkur."
                  </p>
                  <p className="text-gray-400 text-sm text-center mt-2">— Barrister Arsalan Shaikh</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with Animation */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent"> Here</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Sukkur. We'd love to welcome you and discuss how we can work together for the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="h-96 bg-gray-300 relative">
              <iframe
                title="Google Maps - Mayor Office Sukkur"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=House%20No.C-416/2,%20Mohalla%20Upper%20Queens%20Road,%20Sukkur,%20Pakistan&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ / CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Make a
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Difference?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our mission to transform Sukkur. Whether you want to volunteer, collaborate, or simply learn more — we're here for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-10 rounded-full shadow-lg shadow-yellow-500/30 transition-all duration-300 text-lg"
            >
              Get Involved Today →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}