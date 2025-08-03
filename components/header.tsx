"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Stethoscope } from "lucide-react"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/request-call", label: "Request a call" },
  ]

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-lime-400" />
            <span className="text-xl font-bold">MediFocus</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-lime-400 font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
