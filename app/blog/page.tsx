import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-lime-100 text-lime-800 mb-4">Healthcare Insights</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Latest Insights on
              <span className="text-lime-400"> Digital Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay updated with the latest trends, best practices, and innovations in healthcare technology and digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-lime-400 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12">
                  <Badge className="bg-white/20 text-white mb-4">Featured Article</Badge>
                  <h2 className="text-4xl font-bold mb-4">
                    The Future of Telemedicine: 5 Trends Shaping Healthcare in 2024
                  </h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Explore the emerging trends in telemedicine that are revolutionizing patient care and transforming
                    healthcare delivery across the globe.
                  </p>
                  <div className="flex items-center space-x-6 mb-8 text-white/80">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Dr. Sarah Johnson</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">March 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">8 min read</span>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg" className="bg-white text-lime-400 hover:bg-gray-100">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="relative min-h-[400px]">
                  <Image src="/images/tech-1.png" alt="Future of telemedicine" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "All Posts",
              "Telemedicine",
              "EHR Systems",
              "Patient Engagement",
              "Healthcare Analytics",
              "Mobile Health",
              "HIPAA Compliance",
              "Digital Transformation",
            ].map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-lime-400 text-black hover:bg-lime-500"
                    : "border-gray-300 text-gray-600 hover:border-lime-400 hover:text-lime-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How AI is Revolutionizing Healthcare Diagnostics",
                excerpt:
                  "Discover how artificial intelligence is transforming medical diagnostics and improving patient outcomes across various specialties.",
                author: "Dr. Michael Chen",
                date: "March 12, 2024",
                readTime: "6 min read",
                category: "Healthcare Analytics",
                image: "/images/medical-11.png",
              },
              {
                title: "Building Patient Trust in Digital Health Platforms",
                excerpt:
                  "Learn the key strategies for building and maintaining patient trust when implementing digital health solutions.",
                author: "Lisa Thompson",
                date: "March 10, 2024",
                readTime: "5 min read",
                category: "Patient Engagement",
                image: "/images/medical-12.png",
              },
              {
                title: "EHR Integration Best Practices for Small Practices",
                excerpt:
                  "A comprehensive guide to successfully integrating EHR systems in small healthcare practices without disrupting operations.",
                author: "David Kim",
                date: "March 8, 2024",
                readTime: "7 min read",
                category: "EHR Systems",
                image: "/images/office-1.png",
              },
              {
                title: "Mobile Health Apps: Security and Compliance Considerations",
                excerpt:
                  "Essential security and compliance requirements for developing and deploying mobile health applications.",
                author: "Dr. Emily Rodriguez",
                date: "March 5, 2024",
                readTime: "8 min read",
                category: "Mobile Health",
                image: "/images/medical-13.png",
              },
              {
                title: "The ROI of Digital Health Investments",
                excerpt:
                  "How to measure and maximize the return on investment for your digital health technology implementations.",
                author: "Robert Brown",
                date: "March 3, 2024",
                readTime: "6 min read",
                category: "Digital Transformation",
                image: "/images/office-2.png",
              },
              {
                title: "Telemedicine Adoption: Lessons from the Pandemic",
                excerpt:
                  "Key insights and lessons learned from the rapid adoption of telemedicine during the COVID-19 pandemic.",
                author: "Dr. James Wilson",
                date: "March 1, 2024",
                readTime: "9 min read",
                category: "Telemedicine",
                image: "/images/medical-14.png",
              },
              {
                title: "HIPAA Compliance in the Cloud Era",
                excerpt:
                  "Navigate the complexities of maintaining HIPAA compliance when moving healthcare data and applications to the cloud.",
                author: "Amanda Martinez",
                date: "February 28, 2024",
                readTime: "7 min read",
                category: "HIPAA Compliance",
                image: "/images/office-3.png",
              },
              {
                title: "Patient Portal Optimization Strategies",
                excerpt:
                  "Proven strategies to increase patient portal adoption and engagement in your healthcare organization.",
                author: "Dr. Sarah Johnson",
                date: "February 25, 2024",
                readTime: "5 min read",
                category: "Patient Engagement",
                image: "/images/medical-15.png",
              },
              {
                title: "The Future of Remote Patient Monitoring",
                excerpt:
                  "Explore the latest innovations in remote patient monitoring and their impact on chronic disease management.",
                author: "Dr. Michael Chen",
                date: "February 22, 2024",
                readTime: "8 min read",
                category: "Mobile Health",
                image: "/images/medical-16.png",
              },
            ].map((post, index) => (
              <Card key={index} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-lime-50 relative overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-lime-400 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href="#" className="text-lime-400 font-medium text-sm hover:text-lime-500 flex items-center">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Healthcare Innovation</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on digital healthcare delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <Button className="bg-lime-400 text-black hover:bg-lime-500 font-semibold px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
