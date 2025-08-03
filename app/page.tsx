import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Heart,
  Brain,
  Activity,
  Users,
  Calendar,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react"
import { Header } from "@/components/header"

export default function MedicalWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical-team-meeting.png"
            alt="Medical team collaboration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Content - Dark Overlay */}
            <div className="text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-lime-400 text-black text-sm font-medium rounded-full mb-4">
                  Patient satisfaction is our passion
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Provide the Best
                <br />
                <span className="text-lime-400">Healthcare Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                Advanced medical technology and compassionate care delivered by our expert healthcare professionals and
                cutting-edge digital solutions.
              </p>
              <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3">
                LEARN MORE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Side - Lighter overlay area (content handled by background image) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              At our digital health agency, we offer a comprehensive suite of services to help healthcare organizations
              thrive in the digital landscape.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Telemedicine Solutions */}
            <Card className="bg-lime-400 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <Image
                  src="/images/doctor-1.png"
                  alt="Telemedicine specialist"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Telemedicine platform optimization</h3>
                  <p className="text-white/90">
                    Enhance your virtual care delivery with optimized telemedicine platforms and patient engagement
                    tools.
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="bg-white text-lime-400 hover:bg-gray-100">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* Patient Portal Development */}
            <Card className="bg-white border-2 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <Image
                  src="/images/doctor-2.png"
                  alt="Healthcare professional"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Patient portal development</h3>
                  <p className="text-gray-600">
                    Create secure, user-friendly patient portals that improve engagement and streamline healthcare
                    delivery.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* EHR Integration */}
            <Card className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <Image
                  src="/images/doctor-3.png"
                  alt="Medical professional"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">EHR system integration</h3>
                  <p className="text-white/90">
                    Seamlessly integrate and optimize Electronic Health Record systems for improved workflow efficiency.
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-100">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* Health Analytics */}
            <Card className="bg-white border-2 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <Image src="/images/doctor-4.png" alt="Healthcare analyst" fill className="object-cover rounded-full" />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Health data analytics</h3>
                  <p className="text-gray-600">
                    Transform healthcare data into actionable insights for better patient outcomes and operational
                    efficiency.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* Mobile Health Apps */}
            <Card className="bg-lime-400 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <Image
                  src="/images/doctor-5.png"
                  alt="Mobile health specialist"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile health applications</h3>
                  <p className="text-white/90">
                    Develop innovative mobile health apps that empower patients and support healthcare providers.
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="bg-white text-lime-400 hover:bg-gray-100">
                  Learn more
                </Button>
              </CardContent>
            </Card>

            {/* HIPAA Compliance */}
            <Card className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <Image src="/images/doctor-6.png" alt="Compliance expert" fill className="object-cover rounded-full" />
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">HIPAA compliance consulting</h3>
                  <p className="text-white/90">
                    Ensure your digital health solutions meet all regulatory requirements and maintain patient privacy.
                  </p>
                </div>
                <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-100">
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's make healthcare happen.</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our digital health solutions can transform your healthcare organization and
            improve patient outcomes.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-lime-400 text-white mb-4">Case Studies</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Explore Real-Life Examples of Our Proven Digital Health Solutions in Action
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-30 rounded-full overflow-hidden">
                <Image src="/images/doctor-7.png" alt="Case study professional" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">Telemedicine Platform Optimization</h3>
              <p className="text-gray-300 mb-4">
                For a regional healthcare network, we optimized their telemedicine platform, resulting in a 150%
                increase in virtual consultations and 40% improvement in patient satisfaction scores.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-30 rounded-full overflow-hidden">
                <Image src="/images/doctor-8.png" alt="Case study professional" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">Patient Portal Implementation</h3>
              <p className="text-gray-300 mb-4">
                We developed a comprehensive patient portal for a multi-specialty clinic, leading to 60% reduction in
                administrative calls and 85% patient adoption rate within six months.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-30 rounded-full overflow-hidden">
                <Image src="/images/doctor-9.png" alt="Case study professional" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">EHR System Integration</h3>
              <p className="text-gray-300 mb-4">
                Our EHR integration solution for a hospital system reduced documentation time by 30% and improved
                clinical workflow efficiency by 45%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Our Working Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide to Achieving Your Healthcare Digital Goals
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with a comprehensive consultation to understand your healthcare organization's unique needs, challenges, and digital transformation goals.",
              },
              {
                number: "02",
                title: "Research and Strategy Development",
                description:
                  "Our team conducts thorough research and develops a customized digital health strategy tailored to your specific requirements and patient demographics.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "We execute the digital health solutions with precision, ensuring seamless integration with your existing healthcare systems and workflows.",
              },
              {
                number: "04",
                title: "Monitoring and Optimization",
                description:
                  "Continuous monitoring and optimization ensure your digital health solutions perform at peak efficiency and deliver optimal patient outcomes.",
              },
              {
                number: "05",
                title: "Reporting and Communication",
                description:
                  "Regular reporting and transparent communication keep you informed about progress, metrics, and the impact of our digital health initiatives.",
              },
              {
                number: "06",
                title: "Continual Improvement",
                description:
                  "We provide ongoing support and continual improvement to ensure your digital health solutions evolve with changing healthcare needs.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`p-6 rounded-2xl ${index === 0 ? "bg-lime-400 text-white" : "bg-white border-2"}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${index === 0 ? "bg-white/20 text-white" : "bg-lime-100 text-lime-400"}`}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${index === 0 ? "text-white" : "text-gray-900"}`}>
                          {step.title}
                        </h3>
                        {index === 0 && <p className="text-white/90 mt-2">{step.description}</p>}
                      </div>
                    </div>
                    <ChevronDown className={`w-6 h-6 ${index === 0 ? "text-white" : "text-gray-400"}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the healthcare digital experts passionate about transforming patient care through technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                image: "/images/female-doctor-1.png",
              },
              {
                name: "Michael Chen",
                role: "Head of Digital Health",
                image: "/images/male-doctor-1.png",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Clinical Informatics Director",
                image: "/images/female-doctor-2.png",
              },
              {
                name: "David Kim",
                role: "Healthcare UX Designer",
                image: "/images/male-doctor-2.png",
              },
              {
                name: "Dr. James Wilson",
                role: "Telemedicine Specialist",
                image: "/images/male-doctor-3.png",
              },
              {
                name: "Lisa Thompson",
                role: "HIPAA Compliance Expert",
                image: "/images/female-doctor-3.png",
              },
            ].map((member, index) => (
              <Card key={index} className="bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-lime-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <p className="text-sm text-gray-500">
                      Dedicated to improving healthcare outcomes through innovative digital solutions and
                      patient-centered technology.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-lime-400 text-white mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Hear from Healthcare Leaders Who Have Transformed Their Organizations with Our Digital Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-3xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "MediFocus transformed our patient engagement completely. Our telemedicine adoption increased by 200%
                and patient satisfaction scores reached an all-time high."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/doctor-7.png"
                    alt="Dr. John Davis"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Dr. John Davis</p>
                  <p className="text-gray-400 text-sm">Chief Medical Officer, Regional Health Network</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The patient portal they developed exceeded our expectations. Administrative efficiency improved
                dramatically and our patients love the user-friendly interface."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/doctor-8.png"
                    alt="Dr. Amanda Martinez"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Dr. Amanda Martinez</p>
                  <p className="text-gray-400 text-sm">Practice Manager, Family Care Clinic</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Their EHR integration solution streamlined our workflows and reduced documentation time significantly.
                Outstanding technical expertise and healthcare knowledge."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/doctor-9.png"
                    alt="Robert Brown"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Robert Brown</p>
                  <p className="text-gray-400 text-sm">CTO, Metropolitan Hospital System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-lime-100 text-lime-800 mb-4">Contact Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to transform your healthcare organization?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch with our healthcare digital experts to discuss how we can help you improve patient outcomes
                and operational efficiency.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">hello@medifocus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">123 Healthcare Ave, Medical District, NY 10001</span>
                </div>
              </div>
            </div>

            <Card className="bg-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <Image src="/images/doctor-10.png" alt="Contact background" fill className="object-cover" />
              </div>
              <CardContent className="p-0 relative z-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                    <Input placeholder="Your Healthcare Organization" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your digital health needs..." rows={4} />
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Decorative Element */}
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-lime-100 to-lime-50 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Link href="#" className="hover:text-white">
                    Telemedicine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Patient Portals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    EHR Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Health Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
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
    </div>
  )
}
