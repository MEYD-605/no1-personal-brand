import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services Dashboard | Club S by Bo",
  description: "Access our automation workflows and service tools",
  keywords: ["services", "dashboard", "automation", "n8n"],
}

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/20 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Dashboard</h1>
            <p className="text-xl text-gray-600 mb-8">Access our automation workflows and service tools</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="w-full h-[1000px] md:h-[80vh] relative">
              <iframe
                src="https://n8n.clubsxno1ai.com"
                className="absolute inset-0 w-full h-full border-0"
                title="n8n Dashboard"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>If the dashboard doesn't load, please check your network connection or try again later.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
