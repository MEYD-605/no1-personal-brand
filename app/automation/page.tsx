import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Automation & Workflows | No.1 Universe Project",
  description:
    "Streamline your processes with custom automation solutions. Workflow design, integration, and optimization services.",
}

export default function AutomationPage() {
  const services = [
    {
      title: "Workflow Design",
      description: "Custom workflow design to streamline your business processes",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "System Integration",
      description: "Connect your existing systems and tools for seamless operation",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Process Optimization",
      description: "Identify and eliminate bottlenecks in your current workflows",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Automation Implementation",
      description: "Implement automation solutions to reduce manual tasks",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const benefits = [
    {
      title: "Save Time",
      description: "Reduce manual tasks and free up your team's time for more valuable work",
    },
    {
      title: "Reduce Errors",
      description: "Minimize human error with consistent, automated processes",
    },
    {
      title: "Increase Productivity",
      description: "Accomplish more with the same resources through efficient workflows",
    },
    {
      title: "Improve Scalability",
      description: "Create systems that can grow with your business without proportional cost increases",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Automation & Workflows"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Automation & Workflows</h1>
            <p className="text-xl text-white/90 mb-8">
              Streamline your processes, reduce manual tasks, and increase efficiency with custom automation solutions.
            </p>
            <Link
              href="#contact"
              className="px-6 py-3 bg-neon-green text-black font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Automation Services</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Custom automation solutions to help your business operate more efficiently
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="#contact" className="text-neon-green hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Benefits of Automation</h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            Why businesses choose to automate their workflows and processes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-neon-green mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Success Stories</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            See how our automation solutions have helped businesses achieve remarkable results
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">E-commerce Order Processing Automation</h3>
              <p className="text-gray-600 mb-6">
                A growing e-commerce business was struggling with manual order processing, leading to delays and errors.
                We implemented an automated workflow that:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0 mt-1" />
                  <span>Reduced order processing time by 85%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0 mt-1" />
                  <span>Eliminated shipping errors almost entirely</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0 mt-1" />
                  <span>Improved customer satisfaction with faster delivery times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0 mt-1" />
                  <span>Saved 20+ hours of staff time per week</span>
                </li>
              </ul>
              <Link href="/case-studies" className="text-neon-green hover:underline inline-flex items-center">
                Read full case study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="E-commerce Order Processing Automation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Process</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            How we work with you to create effective automation solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-green text-black text-2xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">
                We analyze your current processes to identify opportunities for automation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-green text-black text-2xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                We design custom workflows and automation solutions tailored to your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-green text-black text-2xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">We implement the solutions and integrate them with your existing systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-neon-green text-black text-2xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize the automation for maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get Started with Automation</h2>
            <p className="text-xl mb-8 text-center">
              Ready to streamline your processes? Fill out the form below to discuss your automation needs.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-neon-green focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-neon-green focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-neon-green focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="automation-needs" className="block mb-2">
                  Automation Needs
                </label>
                <select
                  id="automation-needs"
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-neon-green focus:outline-none"
                >
                  <option value="">Select your primary need</option>
                  <option value="workflow-design">Workflow Design</option>
                  <option value="system-integration">System Integration</option>
                  <option value="process-optimization">Process Optimization</option>
                  <option value="automation-implementation">Automation Implementation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-neon-green focus:outline-none"
                  placeholder="Tell us about your current processes and what you'd like to automate..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-neon-green text-black font-medium hover:bg-opacity-90 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
