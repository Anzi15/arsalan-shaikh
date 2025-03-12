import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arsalan Shaikh - Mayor of sukkur | Official Website", 
  description: "Arsalan Shaikh is the Mayor of Sukkur, Sindh, Pakistan. This is his official website where you can find information about his work, projects, and contact details.",
    generator: 'Anzi &. CO'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastProvider>
        {children}
        </ToastProvider>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
import { ToastProvider } from "@radix-ui/react-toast"
