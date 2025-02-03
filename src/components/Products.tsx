import { Microscope, Pill, FlaskRound as Flask, Stethoscope, Syringe, Tablets } from 'lucide-react';

const products = [
  {
    icon: Pill,
    name: "Generic Medicines",
    description: "Wide range of high-quality generic medications for various therapeutic areas.",
    categories: ["Antibiotics", "Cardiovascular", "Diabetes", "Pain Management"]
  },
  {
    icon: Flask,
    name: "API Manufacturing",
    description: "Production of active pharmaceutical ingredients with highest quality standards.",
    categories: ["Chemical Synthesis", "Fermentation", "Semi-Synthetic APIs"]
  },
  {
    icon: Microscope,
    name: "Biosimilars",
    description: "Development and manufacturing of biosimilar products for global markets.",
    categories: ["Monoclonal Antibodies", "Recombinant Proteins"]
  },
  {
    icon: Stethoscope,
    name: "Specialty Medicines",
    description: "Advanced therapeutic solutions for complex medical conditions.",
    categories: ["Oncology", "Immunology", "Rare Diseases"]
  },
  {
    icon: Syringe,
    name: "Injectables",
    description: "Sterile injectable products manufactured in state-of-the-art facilities.",
    categories: ["Liquid Injectables", "Lyophilized Products", "Pre-filled Syringes"]
  },
  {
    icon: Tablets,
    name: "OTC Products",
    description: "Consumer healthcare products available without prescription.",
    categories: ["Pain Relief", "Cold & Flu", "Vitamins & Supplements"]
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600">Comprehensive range of pharmaceutical solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <product.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="space-y-2">
                {product.categories.map((category, idx) => (
                  <div key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    {category}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}