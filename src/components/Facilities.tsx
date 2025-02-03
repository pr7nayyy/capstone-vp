import { Factory, Shield, Truck, Globe } from 'lucide-react';

export default function Facilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
          <p className="text-lg text-gray-600">State-of-the-art facilities with global compliance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=2000" 
              alt="Manufacturing Facility" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Units</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Factory className="w-6 h-6 text-orange-500 mr-3" />
                  <span>5 FDA Approved Facilities</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-orange-500 mr-3" />
                  <span>WHO-GMP Certified</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-orange-500 mr-3" />
                  <span>Advanced Supply Chain</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-orange-500 mr-3" />
                  <span>Global Distribution Network</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Control</h3>
              <p className="text-gray-600 mb-4">Advanced quality control laboratories with latest analytical instruments.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  HPLC Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Gas Chromatography
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Mass Spectrometry
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <p className="text-gray-600 mb-4">Globally recognized quality certifications.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">US FDA</p>
                  <p className="text-sm text-gray-500">Approved</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">EU GMP</p>
                  <p className="text-sm text-gray-500">Certified</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">WHO GMP</p>
                  <p className="text-sm text-gray-500">Compliant</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">ISO 9001</p>
                  <p className="text-sm text-gray-500">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}