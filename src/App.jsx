import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AirPollutionFingerprint() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-emerald-400 mb-6">
          Air Pollution Fingerprint
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-400">
          AI + Hyperspectral Imaging to identify unique spectral fingerprints of
          pollutants and deliver actionable insights.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="bg-emerald-500 text-black font-semibold rounded-2xl px-6 py-3 hover:shadow-[0_0_15px_theme('colors.emerald.400')]">
            Learn More
          </Button>
          <Button variant="outline" className="border-emerald-400 text-emerald-400 rounded-2xl px-6 py-3 hover:bg-emerald-400 hover:text-black">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">The Problem</h2>
        <p className="max-w-4xl text-gray-300">
          Air pollution is a growing threat, with industrial emissions, urban smog,
          and water pollutants impacting human health and climate stability.
          Traditional monitoring methods are limited, expensive, and lack precision.
        </p>
      </section>

      {/* Solution */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Our Solution</h2>
        <p className="max-w-4xl text-gray-300 mb-8">
          Using hyperspectral imaging combined with advanced AI models, we can
          detect unique spectral fingerprints of pollutants like NOx, SO₂, CO, and
          PM2.5. This enables real-time mapping and early detection of hazardous
          emissions.
        </p>
        <Card className="bg-gray-900 border border-gray-800">
          <CardContent className="p-6 text-center text-gray-300">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">How It Works</h3>
            <p>
              Hyperspectral Data → Preprocessing → Fingerprint Extraction → AI
              Classification → Pollution Heatmap
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Applications */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-emerald-400 mb-8">Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Government Agencies",
            "Industrial Compliance",
            "Environmental NGOs",
            "Defense & Security",
          ].map((app, i) => (
            <Card key={i} className="bg-gray-950 border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">{app}</h3>
                <p className="text-gray-400">
                  Leveraging hyperspectral detection for monitoring, prevention, and
                  sustainability.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Placeholder */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Demo</h2>
        <p className="text-gray-400 mb-6">
          Interactive demo of hyperspectral air pollution fingerprinting is coming
          soon. Stay tuned!
        </p>
        <div className="w-full max-w-2xl mx-auto border border-gray-700 rounded-2xl bg-gray-900 p-12 text-gray-500 italic">
          [ Demo Placeholder ]
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          Interested in collaborating, funding, or piloting our technology?
          Contact us today.
        </p>
        <Button className="bg-emerald-500 text-black font-semibold rounded-2xl px-8 py-3 hover:shadow-[0_0_15px_theme('colors.emerald.400')]">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
