import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="/bigtexfacility3.jpg" className="w-full h-full object-cover" alt="Big Tex Facility" />
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
            <h2 className="font-display font-bold text-4xl text-brand-dark mb-6">ABOUT CYPRESS</h2>
            <div className="w-20 h-1 bg-brand-red mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Cypress Big Tex Trailers has been serving the central Louisiana area for over ten years. As a family owned and operated business, Cypress Big Tex can give you that small town, friendly feel that bigger stores can’t. The owner, Jimmie “Jimbo” Butler, started purchasing trailer parts from Tex Trail back in the 90’s for his fabrication business, Butler Fabrication. After becoming familiar with Big Tex Trailers, however, Jimbo and his son Brandon fell in love with the Big Tex products and entire sales team. In the spring of 2000, Jimbo and Brandon decided to start selling trailers. They knew it was important to team up with a top-notch trailer company, so they contacted Big Tex Trailers and became a Big Tex Dealer.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, Brandon is heading the father-son joint venture, and Cypress Big Tex Trailers has experienced substantial growth to become one of the top trailer dealers in Central Louisiana. From heavy duty industrial trailers to the everyday utility trailer, we have a wide variety of trailer options to choose from. Some of these options include aluminum, auto, cargo, dump, equipment, gooseneck, horse, landscaping, livestock, motorcycle, tilt bed, utility and pre-owned trailers as well as truck beds and trailer parts and accessories.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 border-2 border-brand-red rounded-xl transform rotate-2"></div>
             <img 
               src="/cypressbigtexownerandfamily.jpeg" 
               className="rounded-xl shadow-xl relative z-10 w-full"
               alt="Owner and Family"
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