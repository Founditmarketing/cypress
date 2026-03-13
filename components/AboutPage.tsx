import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Construction Site" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <span className="inline-block border border-brand-red text-brand-red px-4 py-1 font-bold text-xs uppercase tracking-[0.2em] mb-4">Established 1985</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">MORE THAN JUST<br/>A DEALERSHIP</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a family-owned business rooted in Cypress, Texas. We don't just sell trailers; we equip our neighbors for their livelihood.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-display font-bold text-4xl text-brand-dark mb-6">OUR STORY</h2>
            <div className="w-20 h-1 bg-brand-red mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              It started with a simple belief: if you treat people right and sell a product you believe in, the rest takes care of itself. For over 30 years, Cypress Big Tex Trailers has been the go-to resource for contractors, ranchers, and hotshot haulers in the Greater Houston area.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We chose Big Tex because they are the toughest trailers on the road. We chose Cypress because this is our home. When you buy from us, you aren't just a transaction number—you're part of the family.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 border-2 border-brand-red rounded-xl transform rotate-2"></div>
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
               className="rounded-xl shadow-xl relative z-10 w-full"
               alt="Our Team"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-red">
               <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">INTEGRITY FIRST</h3>
            <p className="text-gray-500">We don't upsell you on what you don't need. If a utility trailer works better for you than a dump trailer, we'll tell you.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-red">
               <Users className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">EXPERT KNOWLEDGE</h3>
            <p className="text-gray-500">Our team knows towing. From GVWR calculations to axle ratings, we ensure you drive away safe and legal.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-red">
               <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">COMMUNITY FOCUSED</h3>
            <p className="text-gray-500">We support local FFA chapters, little leagues, and first responders. Your business helps us build our community.</p>
          </div>
        </div>
      </div>
    </>
  );
};