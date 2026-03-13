import React from 'react';
import { Wrench, Settings, PenTool, CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const services = [
    { title: 'Axle & Bearing Service', desc: 'Complete repack, seal replacement, and brake inspection.', icon: Settings },
    { title: 'Electrical Diagnostics', desc: 'Fixing wiring shorts, LED upgrades, and connector replacements.', icon: Wrench },
    { title: 'Hitch Installation', desc: 'Gooseneck, 5th wheel, and bumper pull hitch installs.', icon: PenTool },
    { title: 'Welding & Fabrication', desc: 'Frame repair, custom ramps, and structural modifications.', icon: CheckCircle },
  ];

  return (
    <>
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Workshop" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">SERVICE & REPAIR</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Keep your trailer road-ready with our certified technicians. From routine maintenance to major fabrication, we do it all.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <s.icon className="w-10 h-10 text-brand-red mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-brand-dark">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-brand-red mr-3" />
              <h2 className="font-display font-bold text-2xl text-brand-dark">REQUEST APPOINTMENT</h2>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Trailer Type</label>
                <select className="w-full p-3 bg-white border border-gray-200 rounded text-sm focus:border-brand-red outline-none">
                  <option>Dump Trailer</option>
                  <option>Utility Trailer</option>
                  <option>Gooseneck</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Service Needed</label>
                <textarea className="w-full p-3 bg-white border border-gray-200 rounded text-sm focus:border-brand-red outline-none h-24" placeholder="Describe your issue..."></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                   <input type="text" className="w-full p-3 bg-white border border-gray-200 rounded text-sm focus:border-brand-red outline-none" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                   <input type="tel" className="w-full p-3 bg-white border border-gray-200 rounded text-sm focus:border-brand-red outline-none" />
                </div>
              </div>
              <button className="w-full bg-brand-red text-white font-bold py-3 rounded hover:bg-red-700 transition-colors uppercase tracking-wide">
                Submit Request
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Our service manager will call you within 24 hours to confirm.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Parts CTA */}
      <div className="bg-brand-light py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-display font-bold text-3xl mb-4">LOOKING FOR PARTS?</h2>
           <p className="text-gray-600 mb-8 max-w-xl mx-auto">We stock a massive inventory of Dexter axles, tires, wheels, jacks, and lights. Shop where the pros shop.</p>
           <Link to="/contact" className="inline-block border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold py-3 px-8 rounded transition-colors uppercase">
             Call Parts Department
           </Link>
        </div>
      </div>
    </>
  );
};