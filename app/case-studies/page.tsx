import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Case Studies</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Real Results from
              <span className="text-lime-400"> Real Healthcare Organizations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how we've helped healthcare organizations transform their digital infrastructure and improve
              patient outcomes through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-lime-400 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12">
                  <Badge className="bg-white/20 text-white mb-4">Featured Case Study</Badge>
                  <h2 className="text-4xl font-bold mb-6">Regional Health Network Telemedicine Transformation</h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    How we helped a 15-hospital network implement a comprehensive telemedicine platform, resulting in
                    200% increase in virtual consultations and 40% improvement in patient satisfaction.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold mb-2">200%</div>
                      <div className="text-white/80 text-sm">Increase in Virtual Consultations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">40%</div>
                      <div className="text-white/80 text-sm">Patient Satisfaction Improvement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">60%</div>
                      <div className="text-white/80 text-sm">Reduction in Wait Times</div>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg" className="bg-white text-lime-400 hover:bg-gray-100">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="relative min-h-[400px]">
                  <Image src="/images/medical-12.png" alt="Telemedicine consultation" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Specialty Clinic Patient Portal",
                client: "Metro Medical Group",
                challenge: "Reducing administrative burden and improving patient engagement",
                solution: "Custom patient portal with integrated scheduling and secure messaging",
                results: [
                  "85% patient adoption rate",
                  "60% reduction in phone calls",
                  "30% increase in appointment bookings",
                ],
                image: "/images/medical-13.png",
                category: "Patient Engagement",
              },
              {
                title: "Hospital EHR Integration Project",
                client: "City General Hospital",
                challenge: "Streamlining workflows and reducing documentation time",
                solution: "Comprehensive EHR integration with workflow optimization",
                results: [
                  "30% reduction in documentation time",
                  "45% workflow efficiency improvement",
                  "95% staff satisfaction",
                ],
                image: "/images/tech-1.png",
                category: "EHR Integration",
              },
              {
                title: "Rural Health Network Mobile App",
                client: "Mountain View Health System",
                challenge: "Providing healthcare access to remote communities",
                solution: "Mobile health app with telemedicine and remote monitoring",
                results: [
                  "150% increase in rural patient access",
                  "25% reduction in emergency visits",
                  "90% user satisfaction",
                ],
                image: "/images/medical-14.png",
                category: "Mobile Health",
              },
              {
                title: "Specialty Practice Analytics Dashboard",
                client: "Advanced Cardiology Associates",
                challenge: "Improving patient outcomes through data insights",
                solution: "Custom analytics dashboard with predictive modeling",
                results: [
                  "20% improvement in patient outcomes",
                  "35% increase in preventive care",
                  "50% better resource allocation",
                ],
                image: "/images/office-1.png",
                category: "Health Analytics",
              },
              {
                title: "Urgent Care Chain Digital Transformation",
                client: "QuickCare Medical Centers",
                challenge: "Standardizing operations across 20 locations",
                solution: "Integrated digital platform with centralized management",
                results: [
                  "40% reduction in wait times",
                  "25% increase in patient throughput",
                  "80% staff efficiency improvement",
                ],
                image: "/images/medical-15.png",
                category: "Digital Transformation",
              },
              {
                title: "Mental Health Practice HIPAA Compliance",
                client: "Wellness Psychology Group",
                challenge: "Ensuring complete HIPAA compliance for digital systems",
                solution: "Comprehensive compliance audit and system implementation",
                results: ["100% HIPAA compliance achieved", "Zero security incidents", "Enhanced patient trust"],
                image: "/images/medical-16.png",
                category: "Compliance",
              },
            ].map((study, index) => (
              <Card key={index} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-lime-50 relative overflow-hidden">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-lime-400 text-white">{study.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-lime-400 font-medium mb-3">{study.client}</p>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-lime-400" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Read Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-300 text-xl">Results that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Healthcare Organizations Served" },
              { icon: TrendingUp, number: "2M+", label: "Patients Impacted" },
              { icon: Clock, number: "40%", label: "Average Efficiency Improvement" },
              { icon: Award, number: "98%", label: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-lime-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your healthcare organization achieve similar results.
          </p>
          <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3">
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
