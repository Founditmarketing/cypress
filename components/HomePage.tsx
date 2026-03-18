import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { TrailerCard, SheetTrailer } from './TrailerCard';
import { Hero } from './Hero';

export const HomePage: React.FC = () => {
  const [trailers, setTrailers] = useState<SheetTrailer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/inventory');
        if (res.ok) {
          const data = await res.json();
          // Filter out completely empty rows, reverse to get latest additions
          const validData = data.filter((t: SheetTrailer) => t.name || t.sku);
          setTrailers(validData.reverse().slice(0, 8));
        }
      } catch (err) {
        console.error('Failed to load recent inventory', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  return (
    <>
      <Hero />
      
      {/* Value Props */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '🛡️', title: 'Industry Leading Warranty', desc: 'Every trailer is backed by a comprehensive warranty to keep you on the road.' },
              { icon: '🏗️', title: 'Heavy Duty Construction', desc: 'I-Beam frames, powder coating, and premium axles. Built for Texas work.' },
              { icon: '💰', title: 'Flexible Financing', desc: 'We work with Sheffield, Clicklease and more to get you the payment you need.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-display font-bold text-2xl mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Dealer Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest mb-8 text-xs">Proud Authorized Dealer For</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/BigTex-Logo.png" alt="Big Tex" className="h-12 md:h-16 object-contain" />
                <img src="/anvilbrandlogo.jpg" alt="Anvil" className="h-12 md:h-16 object-contain" />
                <img src="/IMG_7394.jpeg" alt="TXP" className="h-12 md:h-16 object-contain" />
                <img src="/libertybrand.png" alt="Liberty" className="h-12 md:h-16 object-contain" />
                <img src="/dexter-axle-primary.png" alt="Dexter Axle" className="h-12 md:h-16 object-contain" />
            </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="font-display font-bold text-4xl text-brand-dark mb-2">LATEST INVENTORY</h2>
              <p className="mt-2 text-gray-500 max-w-xl">Browsing our {trailers.length} most recent additions. Live from the lot.</p>
            </div>
            <Link to="/inventory" className="hidden md:flex items-center text-brand-red font-bold hover:text-brand-dark transition-colors group tracking-widest uppercase">
                VIEW ALL INVENTORY <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {loading ? (
             <div className="flex justify-center items-center py-20 flex-col">
               <Loader2 className="w-12 h-12 text-brand-red animate-spin mb-4" />
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {trailers.map(t => <TrailerCard key={t.id || t.sku} trailer={t} />)}
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/inventory" className="inline-block bg-brand-red text-white font-bold px-8 py-3 rounded-full hover:bg-brand-dark transition-colors w-full tracking-widest uppercase">
                VIEW ALL INVENTORY
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">READY TO HAUL?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Visit our dealership in Cypress, TX or call us today to secure your trailer. 
            Inventory moves fast—don't wait.
          </p>
          <Link to="/contact" className="inline-block bg-brand-red text-white font-display font-bold text-xl px-10 py-4 rounded-sm hover:bg-white hover:text-brand-red transition-colors">
            GET DIRECTIONS
          </Link>
        </div>
      </section>
    </>
  );
};