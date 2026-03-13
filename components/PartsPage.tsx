import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Disc, Zap, Box, Anchor, Phone } from 'lucide-react';

export const PartsPage: React.FC = () => {
  const categories = [
    { name: 'Tires & Wheels', icon: Disc, items: ['Radial Tires', 'Spare Assemblies', 'Aluminum Wheels'] },
    { name: 'Lighting & Electrical', icon: Zap, items: ['LED Light Kits', 'Breakaway Systems', '7-Way Plugs'] },
    { name: 'Jacks & Couplers', icon: Anchor, items: ['Bulldog Jacks', 'Demco Couplers', 'Pintle Rings'] },
    { name: 'Cargo Control', icon: Box, items: ['E-Track Systems', 'Heavy Duty Straps', 'Binder Chains'] },
    { name: 'Suspension', icon: Wrench, items: ['Dexter Axles', 'Leaf Springs', 'Equalizers'] },
    { name: 'Body Components', icon: Box, items: ['Fenders', 'Ramps', 'Toolboxes'] },
  ];

  return (
    <>
      <div className="bg-brand-gray text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">GENUINE PARTS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We stock genuine OEM parts from <strong>Dexter Axle</strong>, Bulldog, and Big Tex to keep your trailer hauling safely.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Dexter Hero Section */}
        <div className="bg-[#004B8D] rounded-2xl p-8 md:p-12 mb-16 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="md:w-2/3">
                <span className="inline-block bg-white/20 text-white px-3 py-1 font-bold text-xs uppercase tracking-widest rounded-sm mb-4">Official Distributor</span>
                <h2 className="font-display font-bold text-4xl mb-4">DEXTER AXLE PARTS & SERVICE</h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    We are your authorized source for genuine Dexter Axle components. From complete axle assemblies to brakes, drums, and seals, we carry the parts that keep the industry moving.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-white text-[#004B8D] font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
                        ORDER DEXTER PARTS
                    </Link>
                </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-[#004B8D] font-black text-center leading-tight">
                        <span className="block text-3xl">DEXTER</span>
                        <span className="block text-xl">AXLE</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-red transition-all duration-300">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <cat.icon className="w-8 h-8 text-brand-dark group-hover:text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">{cat.name}</h3>
              <ul className="space-y-2 mb-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-brand-red font-bold text-sm uppercase tracking-wide hover:underline">
                Check Availability &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Parts Hero CTA */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
          <div className="md:w-1/2 p-12">
            <h2 className="font-display font-bold text-4xl text-white mb-6">CANT FIND WHAT YOU NEED?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              We have access to the full Big Tex network. If we don't have it on the shelf, we can have it here in 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-red text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-red transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> (281) 373-4905
              </button>
              <Link to="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center">
                Parts Request Form
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto relative">
             <img 
               src="https://images.unsplash.com/photo-1626848971848-d309068037df?q=80&w=2070&auto=format&fit=crop"
               className="w-full h-full object-cover opacity-80"
               alt="Parts Counter"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};