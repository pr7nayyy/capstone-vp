import { Lightbulb, Brain, Dna, Microscope } from 'lucide-react';

export default function Research() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Development</h2>
          <p className="text-lg text-gray-600">Driving innovation in pharmaceutical research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drug Discovery</h3>
                <p className="text-gray-600">Advanced research facilities for identifying and developing new drug candidates.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Brain className="w-8 h-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clinical Research</h3>
                <p className="text-gray-600">State-of-the-art clinical research facilities ensuring safety and efficacy.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Dna className="w-8 h-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biotechnology</h3>
                <p className="text-gray-600">Advanced biotech research for developing innovative therapeutic solutions.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Microscope className="w-8 h-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytical Development</h3>
                <p className="text-gray-600">Cutting-edge analytical capabilities for product development and testing.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Highlights</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">50+</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Active Research Projects</p>
                  <p className="text-sm text-gray-600">Across various therapeutic areas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">200+</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Research Scientists</p>
                  <p className="text-sm text-gray-600">Dedicated to innovation</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">100+</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Patents Filed</p>
                  <p className="text-sm text-gray-600">Global intellectual property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}