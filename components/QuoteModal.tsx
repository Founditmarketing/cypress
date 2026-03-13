import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  trailerName?: string;
}

export const QuoteModal: React.FC<Props> = ({ isOpen, onClose, trailerName }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-display font-bold text-3xl text-brand-dark mb-4">REQUEST RECEIVED!</h3>
            <p className="text-gray-600 mb-8">
              Thanks for your interest in the <span className="font-bold">{trailerName}</span>. 
              One of our sales pros (probably Blake or Tex) will reach out to you within the hour.
            </p>
            <button 
              onClick={onClose}
              className="bg-brand-dark text-white font-bold py-3 px-8 rounded hover:bg-gray-800"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="bg-brand-red p-6 text-white">
              <h3 className="font-display font-bold text-2xl">GET YOUR PRICE</h3>
              <p className="text-white/80 text-sm mt-1">
                {trailerName ? `Requesting quote for: ${trailerName}` : 'Tell us what you are looking for.'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-brand-red outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-brand-red outline-none" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
                <input required type="tel" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-brand-red outline-none" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                <input required type="email" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-brand-red outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Trade-In?</label>
                <select className="w-full border border-gray-300 rounded p-3 text-sm focus:border-brand-red outline-none">
                  <option value="no">No, I don't have a trade</option>
                  <option value="yes">Yes, I have a trade-in</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-dark text-white font-bold py-4 rounded hover:bg-gray-900 transition-colors flex items-center justify-center mt-4"
              >
                SEND REQUEST <Send className="w-4 h-4 ml-2" />
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-2">
                By submitting, you agree to receive calls or texts from Cypress Big Tex.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};