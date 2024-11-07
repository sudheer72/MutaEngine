import React from 'react';
import { FileKey, Shield, Infinity } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Secure File Management Made Simple
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Powerful encryption and decryption for unlimited files. Perfect for businesses that prioritize security without complexity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
              Try It Free
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}