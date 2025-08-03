import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight, Users, Building, SpaceIcon as Enterprise } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Pricing Plans</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the Right Plan for
              <span className="text-lime-400"> Your Healthcare Organization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Flexible pricing options designed to scale with your organization, from small practices to large hospital
              networks.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white border-2 rounded-3xl p-8 relative">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <Users className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600 mb-4">Perfect for small practices and clinics</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $2,500<span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Up to 5 providers</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Basic telemedicine platform",
                    "Patient portal (up to 1,000 patients)",
                    "Appointment scheduling",
                    "Secure messaging",
                    "Basic analytics dashboard",
                    "Email support",
                    "HIPAA compliance tools",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime-400" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-lime-400 text-white rounded-3xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-black text-white px-4 py-2">Most Popular</Badge>
              </div>
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <Building className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-white/90 mb-4">Ideal for growing healthcare organizations</p>
                  <div className="text-4xl font-bold mb-2">
                    $7,500<span className="text-lg font-normal text-white/80">/month</span>
                  </div>
                  <p className="text-sm text-white/70">Up to 25 providers</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Advanced telemedicine platform",
                    "Patient portal (up to 10,000 patients)",
                    "EHR integration (2 systems)",
                    "Advanced analytics & reporting",
                    "Mobile health app",
                    "Priority phone & email support",
                    "Custom workflow optimization",
                    "Staff training included",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white text-lime-400 hover:bg-gray-100 font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-black text-white rounded-3xl p-8 relative">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <Enterprise className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-white/90 mb-4">For large hospital networks and health systems</p>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-sm text-white/70">Unlimited providers</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Full-scale digital transformation",
                    "Unlimited patient portal access",
                    "Complete EHR integration suite",
                    "AI-powered analytics platform",
                    "Custom mobile applications",
                    "24/7 dedicated support team",
                    "On-site implementation",
                    "Ongoing optimization services",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime-400" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-lime-400 text-black hover:bg-lime-500 font-semibold">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Add-on Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Plan</h2>
            <p className="text-xl text-gray-600">Additional services to maximize your digital health investment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Advanced Analytics",
                price: "$500/month",
                description: "AI-powered insights and predictive modeling",
              },
              {
                title: "Custom Integrations",
                price: "$1,000/month",
                description: "Connect with additional third-party systems",
              },
              {
                title: "White-label Solutions",
                price: "$750/month",
                description: "Brand the platform with your organization's identity",
              },
              {
                title: "Dedicated Success Manager",
                price: "$2,000/month",
                description: "Personal account manager for ongoing optimization",
              },
            ].map((addon, index) => (
              <Card key={index} className="bg-white rounded-2xl p-6 text-center">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.title}</h3>
                  <div className="text-2xl font-bold text-lime-400 mb-3">{addon.price}</div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-lime-100 text-lime-800 mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the implementation process?",
                answer:
                  "All plans include comprehensive implementation support, including system setup, data migration, staff training, and go-live assistance. Our team works closely with yours to ensure a smooth transition.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. Our team will help you transition smoothly.",
              },
              {
                question: "Is there a long-term contract required?",
                answer:
                  "We offer both monthly and annual billing options. Annual plans receive a 15% discount. There are no long-term contracts required, though we recommend at least 6 months for optimal results.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "All plans include comprehensive support via email and phone. Professional and Enterprise plans receive priority support with faster response times and dedicated account management.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white border rounded-2xl p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lime-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss your specific needs and find the perfect plan for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-400 hover:bg-gray-100 font-semibold px-8 py-3">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-lime-400 font-semibold px-8 py-3 bg-transparent"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
