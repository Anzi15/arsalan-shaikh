import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-yellow-500">
            Arsalan Shaikh
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-yellow-500 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

