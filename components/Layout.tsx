import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Truck, ChevronRight, Facebook, Instagram } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-brand-red transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 mr-2 text-brand-red" />
              11333 Huffmeister Rd, Houston, TX
            </span>
            <span className="flex items-center hover:text-brand-red transition-colors cursor-pointer">
              <Phone className="w-4 h-4 mr-2 text-brand-red" />
              (281) 373-4905
            </span>
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-brand-red">About Us</Link>
            <Link to="/financing" className="hover:text-brand-red">Financing</Link>
            <Link to="/services" className="hover:text-brand-red">Service</Link>
            <Link to="/parts" className="hover:text-brand-red">Parts</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            {/* Logo Simulation */}
            <div className="bg-brand-red text-white font-display font-bold text-2xl px-3 py-1 -skew-x-12 group-hover:bg-brand-dark transition-colors">
              <span className="skew-x-12 inline-block">CYPRESS</span>
            </div>
            <div className="ml-2 font-display font-bold text-2xl text-brand-dark">
              BIG TEX <span className="text-brand-red">TRAILERS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 font-display font-medium uppercase tracking-wide text-brand-dark">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <Link to="/inventory" className="hover:text-brand-red transition-colors">Inventory</Link>
            <Link to="/parts" className="hover:text-brand-red transition-colors">Parts</Link>
            <Link to="/services" className="hover:text-brand-red transition-colors">Service</Link>
            <Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link>
            <Link 
              to="/inventory" 
              className="bg-brand-red text-white px-6 py-2 rounded-sm -skew-x-12 hover:bg-brand-dark transition-colors flex items-center"
            >
              <span className="skew-x-12">Get A Quote</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 space-y-4 font-display font-medium text-lg uppercase">
            <Link to="/" className="text-brand-dark hover:text-brand-red">Home</Link>
            <Link to="/inventory" className="text-brand-dark hover:text-brand-red">Inventory</Link>
            <Link to="/parts" className="text-brand-dark hover:text-brand-red">Parts</Link>
            <Link to="/services" className="text-brand-dark hover:text-brand-red">Service</Link>
            <Link to="/about" className="text-brand-dark hover:text-brand-red">About Us</Link>
            <Link to="/contact" className="text-brand-dark hover:text-brand-red">Contact</Link>
            <Link to="/inventory" className="bg-brand-red text-white text-center py-3">Get A Quote</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-red">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="font-display font-bold text-2xl mb-4">CYPRESS <span className="text-brand-red">BIG TEX</span></div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are your premier source for Big Tex Trailers in Houston and Cypress. 
              Family owned, customer focused, and dedicated to getting you the right hauler for the job.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-brand-red transition-colors"><Facebook className="w-6 h-6"/></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Instagram className="w-6 h-6"/></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/inventory" className="hover:text-brand-red transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> All Inventory</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Service & Repair</Link></li>
              <li><Link to="/parts" className="hover:text-brand-red transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Parts & Accessories</Link></li>
              <li><Link to="/financing" className="hover:text-brand-red transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Financing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 uppercase tracking-wider">Inventory Types</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/inventory?cat=Dump" className="hover:text-brand-red transition-colors">Dump Trailers</Link></li>
              <li><Link to="/inventory?cat=Utility" className="hover:text-brand-red transition-colors">Utility Trailers</Link></li>
              <li><Link to="/inventory?cat=Equipment" className="hover:text-brand-red transition-colors">Equipment Haulers</Link></li>
              <li><Link to="/inventory?cat=Gooseneck" className="hover:text-brand-red transition-colors">Gooseneck Flatbeds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-red mt-1 shrink-0" />
                <p>11333 Huffmeister Rd,<br/>Houston, TX 77065</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <p>(281) 373-4905</p>
              </div>
              <div className="flex items-start">
                <Truck className="w-5 h-5 mr-3 text-brand-red mt-1 shrink-0" />
                <p>Mon-Fri: 8am - 5pm<br/>Sat: 9am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cypress Big Tex Trailers. All Rights Reserved.</p>
          <p className="mt-2 text-xs opacity-50">Powered by Antigravity x AI Studio</p>
        </div>
      </footer>
    </div>
  );
};