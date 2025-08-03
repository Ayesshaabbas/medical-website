import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-lime-100 text-lime-800 mb-4">About MediFocus</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Healthcare Through
                <span className="text-lime-400"> Digital Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a team of healthcare professionals, technologists, and innovators dedicated to revolutionizing
                patient care through cutting-edge digital solutions.
              </p>
              <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3">
                Learn Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/medical-11.png"
                  alt="Healthcare professionals collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-lime-400 text-white p-8 rounded-3xl">
              <CardContent className="p-0">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To bridge the gap between healthcare providers and patients through innovative digital solutions that
                  improve accessibility, efficiency, and outcomes in healthcare delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black text-white p-8 rounded-3xl">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  A world where every patient has seamless access to quality healthcare through technology that empowers
                  both providers and patients to achieve better health outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image src="/images/office-1.png" alt="Our office and team" fill className="object-cover" />
              </div>
            </div>
            <div>
              <Badge className="bg-lime-100 text-lime-800 mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Founded by Healthcare Professionals, Built for the Future
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MediFocus was founded in 2018 by a team of physicians and technology experts who recognized the urgent
                need for better digital solutions in healthcare. After experiencing firsthand the challenges of outdated
                systems and inefficient processes, we set out to create technology that truly serves both healthcare
                providers and patients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we've helped over 500 healthcare organizations transform their digital infrastructure, improving
                patient outcomes and operational efficiency across the board.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Healthcare Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400 mb-2">2M+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Every Day</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Patient-Centered",
                description: "Every solution we build puts patient care and outcomes at the center.",
                image: "/images/medical-12.png",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do.",
                image: "/images/medical-13.png",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work closely with healthcare providers to understand their needs.",
                image: "/images/medical-14.png",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in healthcare technology.",
                image: "/images/tech-1.png",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white rounded-3xl overflow-hidden border-2 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-lime-50 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      fill
                      className="object-cover opacity-20"
                    />
                    <value.icon className="w-12 h-12 text-lime-400 relative z-10" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/images/doctor-1.png",
                bio: "Former Chief Medical Officer at Regional Health Network with 15+ years in healthcare innovation.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image: "/images/doctor-2.png",
                bio: "Technology leader with expertise in healthcare systems and digital transformation.",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Chief Medical Officer",
                image: "/images/doctor-3.png",
                bio: "Board-certified physician specializing in clinical informatics and patient care optimization.",
              },
            ].map((leader, index) => (
              <Card key={index} className="bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-lime-100 overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-lime-400 font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-sm">{leader.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
