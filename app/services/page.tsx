import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Activity, Users, Brain, Shield, Smartphone, Database, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Our Services</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Digital Health
              <span className="text-lime-400"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From telemedicine platforms to EHR integration, we provide end-to-end digital solutions that transform
              healthcare delivery and improve patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Telemedicine Platform Optimization",
                description:
                  "Enhance your virtual care delivery with optimized telemedicine platforms and patient engagement tools.",
                features: [
                  "Video consultation setup",
                  "Patient scheduling",
                  "Remote monitoring",
                  "Integration support",
                ],
                image: "/images/medical-15.png",
                color: "lime",
              },
              {
                icon: Users,
                title: "Patient Portal Development",
                description:
                  "Create secure, user-friendly patient portals that improve engagement and streamline healthcare delivery.",
                features: ["Custom portal design", "Secure messaging", "Appointment booking", "Medical records access"],
                image: "/images/medical-16.png",
                color: "white",
              },
              {
                icon: Brain,
                title: "EHR System Integration",
                description:
                  "Seamlessly integrate and optimize Electronic Health Record systems for improved workflow efficiency.",
                features: ["System integration", "Data migration", "Workflow optimization", "Staff training"],
                image: "/images/tech-1.png",
                color: "black",
              },
              {
                icon: Database,
                title: "Health Data Analytics",
                description:
                  "Transform healthcare data into actionable insights for better patient outcomes and operational efficiency.",
                features: ["Data visualization", "Predictive analytics", "Performance metrics", "Custom reporting"],
                image: "/images/office-2.png",
                color: "white",
              },
              {
                icon: Smartphone,
                title: "Mobile Health Applications",
                description:
                  "Develop innovative mobile health apps that empower patients and support healthcare providers.",
                features: ["iOS & Android apps", "Wearable integration", "Push notifications", "Offline functionality"],
                image: "/images/medical-11.png",
                color: "lime",
              },
              {
                icon: Shield,
                title: "HIPAA Compliance Consulting",
                description:
                  "Ensure your digital health solutions meet all regulatory requirements and maintain patient privacy.",
                features: ["Compliance audits", "Risk assessments", "Policy development", "Staff training"],
                image: "/images/office-3.png",
                color: "black",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`p-8 rounded-3xl relative overflow-hidden ${
                  service.color === "lime"
                    ? "bg-lime-400 text-white"
                    : service.color === "black"
                      ? "bg-black text-white"
                      : "bg-white border-2"
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <CardContent className="p-0 relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        service.color === "white" ? "bg-lime-100" : "bg-white/20"
                      }`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${service.color === "white" ? "text-lime-400" : "text-current"}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className={`mb-4 ${service.color === "white" ? "text-gray-600" : "text-current opacity-90"}`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle
                            className={`w-4 h-4 ${service.color === "white" ? "text-lime-400" : "text-current"}`}
                          />
                          <span
                            className={`text-sm ${service.color === "white" ? "text-gray-600" : "text-current opacity-90"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant={service.color === "white" ? "outline" : "secondary"}
                    size="sm"
                    className={
                      service.color === "white"
                        ? ""
                        : service.color === "lime"
                          ? "bg-white text-lime-400 hover:bg-gray-100"
                          : "bg-white text-black hover:bg-gray-100"
                    }
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current systems and identify opportunities for improvement.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a customized digital health strategy tailored to your needs.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the solution with precision and minimal disruption to your operations.",
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support and optimization to ensure continued success.",
              },
            ].map((process, index) => (
              <Card key={index} className="bg-white p-6 rounded-3xl text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital health solutions can improve your patient outcomes and operational efficiency.
          </p>
          <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
