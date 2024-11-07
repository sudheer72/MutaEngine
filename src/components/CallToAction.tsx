import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Files?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses that trust MutaCryptor Lite for their file security needs.
        </p>
        <button 
          onClick={() => window.open('https://mutaengine.cloud/signup', '_blank')}
          className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}