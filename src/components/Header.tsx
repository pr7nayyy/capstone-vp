import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1e1e1e] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:info@galleon.co.in" className="flex items-center text-sm">
                <span className="mr-2">✉</span> info@galleon.co.in
              </a>
              <span className="flex items-center text-sm">
                <span className="mr-2">📍</span> Nerul, Navi Mumbai - 400706
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">Facebook</a>
              <a href="#" className="hover:text-orange-500">Twitter</a>
              <a href="#" className="hover:text-orange-500">LinkedIn</a>
              <a href="#" className="hover:text-orange-500">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="text-2xl font-bold text-gray-800">GALLEON INSTRUTECH PVT. LTD.</a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-orange-500">Home</a>
              <a href="/about" className="hover:text-orange-500">About Us</a>
              <a href="/products" className="hover:text-orange-500">Products</a>
              <a href="/research" className="hover:text-orange-500">R&D</a>
              <a href="/contact" className="hover:text-orange-500">Contact</a>
              <a href="/careers" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                Careers
              </a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-orange-500">Home</a>
                <a href="/about" className="hover:text-orange-500">About Us</a>
                <a href="/products" className="hover:text-orange-500">Products</a>
                <a href="/research" className="hover:text-orange-500">R&D</a>
                <a href="/contact" className="hover:text-orange-500">Contact</a>
                <a href="/careers" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-center">
                  Careers
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}