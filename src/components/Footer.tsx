export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Galleon</h3>
            <p className="text-gray-400">
              Leading pharmaceutical company committed to improving global healthcare through innovation and excellence.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/research" className="text-gray-400 hover:text-white">R&D</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Generic Medicines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Manufacturing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Biosimilars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Specialty Medicines</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Galleon Pharmaceuticals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}