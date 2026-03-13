import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] bg-brand-dark overflow-hidden flex items-center">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591736287093-b09b40742d4a?q=80&w=2070&auto=format&fit=crop" 
          alt="Heavy Duty Trailer" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-brand-red text-white px-4 py-1 font-display font-bold uppercase tracking-widest text-sm mb-6 -skew-x-12">
            <span className="skew-x-12 inline-block">America's #1 Professional Trailer Brand</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            BUILT FOR THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">LONG HAUL</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            From heavy-duty dump trailers to versatile utilities, Cypress Big Tex Trailers stocks the toughest haulers in Texas. Ready to work when you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/inventory" 
              className="bg-brand-red hover:bg-red-700 text-white font-display font-bold text-lg px-8 py-4 rounded-sm transition-all transform hover:translate-x-1 flex items-center justify-center"
            >
              BROWSE INVENTORY <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-brand-dark text-white font-display font-bold text-lg px-8 py-4 rounded-sm transition-all flex items-center justify-center"
            >
              VISIT DEALERSHIP
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-brand-red rounded-full" />
        </div>
      </div>
    </div>
  );
};