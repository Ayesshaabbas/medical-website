import Link from "next/link"
import { Stethoscope } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-lime-400" />
              <span className="text-xl font-bold">MediFocus</span>
            </div>
            <p className="text-gray-400">
              Transforming healthcare through innovative digital solutions and patient-centered technology.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Patient Portals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  EHR Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Health Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>hello@medifocus.com</li>
              <li>
                123 Healthcare Ave
                <br />
                Medical District, NY 10001
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MediFocus. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
