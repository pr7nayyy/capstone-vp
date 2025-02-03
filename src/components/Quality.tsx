import { CheckCircle, Award, ShieldCheck, FileCheck } from 'lucide-react';

export default function Quality() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
          <p className="text-lg text-gray-600">Committed to highest quality standards</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Control</h3>
            <p className="text-gray-600">Rigorous testing at every stage of production</p>
          </div>

          <div className="text-center">
            <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certifications</h3>
            <p className="text-gray-600">International quality certifications</p>
          </div>

          <div className="text-center">
            <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Standards</h3>
            <p className="text-gray-600">Adherence to global safety protocols</p>
          </div>

          <div className="text-center">
            <FileCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600">Complete traceability and documentation</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quality Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
              <p className="text-gray-600">Product Quality Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-600">Regulatory Compliance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">&lt;0.1%</div>
              <p className="text-gray-600">Deviation Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}