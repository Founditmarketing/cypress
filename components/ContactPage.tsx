import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Map Header */}
      <div className="h-96 w-full bg-gray-200 relative overflow-hidden">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.309069695679!2d-95.6661110243288!3d29.998399974946975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d2f801646733%3A0x633190209c1220a7!2s11333%20Huffmeister%20Rd%2C%20Houston%2C%20TX%2077065!5e0!3m2!1sen!2sus!4v1709825412345!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-brand-dark text-white">
            <h2 className="font-display font-bold text-3xl mb-8">CONTACT US</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                 <div className="bg-brand-red p-3 rounded-lg mr-4"><MapPin className="w-6 h-6"/></div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Our Location</h4>
                   <p className="text-gray-400">11333 Huffmeister Rd,<br/>Houston, TX 77065</p>
                 </div>
              </div>

              <div className="flex items-start">
                 <div className="bg-brand-red p-3 rounded-lg mr-4"><Phone className="w-6 h-6"/></div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Phone</h4>
                   <p className="text-gray-400 font-mono text-lg">(281) 373-4905</p>
                 </div>
              </div>

              <div className="flex items-start">
                 <div className="bg-brand-red p-3 rounded-lg mr-4"><Calendar className="w-6 h-6"/></div>
                 <div>
                   <h4 className="font-bold text-lg mb-1">Hours</h4>
                   <p className="text-gray-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                   <p className="text-gray-400">Saturday: 9:00 AM - 2:00 PM</p>
                   <p className="text-gray-400">Sunday: Closed</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-6">SEND A MESSAGE</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:border-brand-red outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:border-brand-red outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:border-brand-red outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 rounded focus:border-brand-red outline-none"></textarea>
              </div>
              <button className="bg-brand-red text-white font-bold py-3 px-8 rounded-sm hover:bg-red-700 transition-colors w-full">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};