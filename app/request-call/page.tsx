import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Clock, CheckCircle, Users, Award, ArrowRight } from "lucide-react"

export default function RequestCallPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-lime-100 text-lime-800 mb-4">Request a Call</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Discuss Your
                <span className="text-lime-400"> Digital Health Needs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Schedule a consultation with our healthcare technology experts to explore how we can transform your
                organization's digital infrastructure and improve patient outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">Free 30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">Customized solution recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-gray-600">No obligation or commitment required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image src="/images/medical-16.png" alt="Healthcare consultation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white p-8 rounded-3xl border-2">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="john@healthcare.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                    <Input placeholder="Your Healthcare Organization" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400">
                      <option value="">Select organization type</option>
                      <option value="hospital">Hospital</option>
                      <option value="clinic">Clinic</option>
                      <option value="private-practice">Private Practice</option>
                      <option value="health-system">Health System</option>
                      <option value="urgent-care">Urgent Care</option>
                      <option value="specialty-practice">Specialty Practice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Providers</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400">
                      <option value="">Select range</option>
                      <option value="1-5">1-5 providers</option>
                      <option value="6-25">6-25 providers</option>
                      <option value="26-100">26-100 providers</option>
                      <option value="100+">100+ providers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Call Time</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400">
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 7 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your digital health needs
                    </label>
                    <Textarea
                      placeholder="Describe your current challenges, goals, and what you'd like to discuss during our call..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3">
                    Schedule My Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Schedule a Call?</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Expert Consultation",
                      description:
                        "Speak directly with our healthcare technology experts who understand your industry's unique challenges.",
                    },
                    {
                      icon: Award,
                      title: "Customized Solutions",
                      description:
                        "Get personalized recommendations based on your organization's specific needs and goals.",
                    },
                    {
                      icon: Clock,
                      title: "Quick Implementation",
                      description:
                        "Learn about our proven implementation process and realistic timelines for your project.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-lime-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-lime-400 text-white p-6 rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Prefer to Call Us Directly?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span className="text-lg font-medium">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>Monday - Friday, 9 AM - 6 PM EST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 p-6 rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Confirmation:</strong> You'll receive a confirmation email within 15 minutes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Preparation:</strong> Our team will review your information and prepare for the call
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Consultation:</strong> We'll call you at the scheduled time to discuss your needs
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Client Success</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The consultation call was incredibly valuable. The team understood our needs immediately and provided clear, actionable recommendations.",
                author: "Dr. Jennifer Adams",
                role: "Chief Medical Officer",
                organization: "Regional Medical Center",
                image: "/images/doctor-7.png",
              },
              {
                quote:
                  "From the first call to implementation, the process was seamless. Their expertise in healthcare technology is unmatched.",
                author: "Mark Thompson",
                role: "IT Director",
                organization: "Community Health Network",
                image: "/images/doctor-8.png",
              },
              {
                quote:
                  "The initial consultation helped us understand exactly what we needed. The team's knowledge and professionalism impressed us from day one.",
                author: "Dr. Lisa Chen",
                role: "Practice Manager",
                organization: "Family Care Associates",
                image: "/images/doctor-9.png",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white p-6 rounded-3xl">
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-lime-400">{testimonial.organization}</p>
                    </div>
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
