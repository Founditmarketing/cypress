import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';
import { TrailerCard } from './TrailerCard';
import { Hero } from './Hero';

export const HomePage: React.FC = () => {
  const { inventory } = useInventory();
  
  // Show 10 items total.
  // Sort priority: Featured items first, then others.
  const displayInventory = [...inventory]
    .filter(i => i.status !== 'Sold' && !i.isHidden)
    .sort((a, b) => {
      // If a is featured and b is not, a comes first (-1)
      if (a.isFeatured && !b.isFeatured) return -1;
      // If b is featured and a is not, b comes first (1)
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    })
    .slice(0, 10);

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
                {/* Text logos styled to look like brand logos */}
                <div className="text-4xl md:text-5xl font-black italic text-brand-dark tracking-tighter transform -skew-x-12">BIG TEX</div>
                <div className="text-3xl md:text-4xl font-serif font-extrabold text-gray-800 tracking-wide uppercase">ANVIL</div>
                <div className="text-3xl md:text-4xl font-sans font-black text-brand-red tracking-tight">TXP</div>
                <div className="text-2xl md:text-3xl font-mono font-bold text-gray-700">LIBERTY</div>
                <div className="text-xl md:text-2xl font-sans font-bold text-[#004B8D] border-2 border-[#004B8D] px-2 py-1">DEXTER AXLE</div>
            </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-display font-bold text-4xl text-brand-dark mb-2">LATEST INVENTORY</h2>
              <div className="h-1 w-20 bg-brand-red"></div>
              <p className="mt-4 text-gray-500 max-w-xl">Browsing {displayInventory.length} of our top models. Stock changes daily.</p>
            </div>
            <Link to="/inventory" className="hidden md:flex items-center text-brand-red font-bold hover:text-brand-dark transition-colors group">
                VIEW ALL INVENTORY <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayInventory.map(t => <TrailerCard key={t.id} trailer={t} />)}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/inventory" className="inline-block bg-white border border-gray-200 text-brand-red font-bold px-8 py-3 rounded-full shadow-sm hover:bg-gray-50">
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