"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const footerLinks = {
    about: {
      title: "About",
      links: [
        { name: "Arsalan's Story", href: "/about", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Philosophy", href: "/about#philosophy", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Leadership", href: "/about#team", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Achievements", href: "/about#achievements", icon: <ChevronRight className="w-3 h-3" /> }
      ]
    },
    events: {
      title: "Events",
      links: [
        { name: "Upcoming Events", href: "#", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Virtual Gatherings", href: "#", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Community Meetups", href: "#", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Press Conferences", href: "#", icon: <ChevronRight className="w-3 h-3" /> }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Projects", href: "/projects", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Media Coverage", href: "#", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Publications", href: "#", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Gallery", href: "#", icon: <ChevronRight className="w-3 h-3" /> }
      ]
    },
    contact: {
      title: "Contact",
      links: [
        { name: "Get in Touch", href: "/contact", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Media Inquiries", href: "/contact", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Partnerships", href: "/contact", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Support", href: "/contact", icon: <ChevronRight className="w-3 h-3" /> }
      ]
    }
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/BRArsalanSheikh", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/BRArsalanShaikh", label: "Facebook", color: "hover:bg-blue-700" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "info@arsalanshaikh.com", href: "mailto:info@arsalanshaikh.com" },
    // { icon: <Phone className="w-4 h-4" />, text: "+92 (XXX) XXX-XXXX", href: "tel:+92XXXXXXXXXX" },
    // { icon: <MapPin className="w-4 h-4" />, text: "Sukkur, Sindh, Pakistan", href: "#" }
  ];

  return (
    <>
      {/* Footer CTA with Curved Design */}
      <section className="relative py-20 overflow-hidden">
        {/* Curved top background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        </div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">Join the Movement</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Make an{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Impact?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to build a better future for Sukkur and beyond
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Footer */}
      <footer ref={footerRef} className="bg-white relative">
        {/* Subtle top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                  Arsalan Shaikh
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 rounded-full" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Spokesperson for Government of Sindh, Mayor of Sukkur, dedicated to public service and urban development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-600 hover:text-yellow-600 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([key, column], colIdx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + colIdx * 0.1 }}
                className="lg:col-span-1"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-lg relative inline-block">
                  {column.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-yellow-600 transition-colors flex items-center gap-2 group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-600">
                  Subscribe to our newsletter for latest updates and events
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-500 text-sm"
              >
                © {new Date().getFullYear()} Arsalan Shaikh. All rights reserved.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-3"
              >
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -5, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Designer Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mt-8"
            >
              <Link
                href="https://anziandco.com?refer=arsalanShaikh"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors inline-flex items-center gap-1"
              >
                Website designed and developed by
                <b className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                  Anzi & Co
                </b>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all z-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </footer>
    </>
  );
}