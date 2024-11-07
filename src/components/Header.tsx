import React from 'react';
import { Shield, Lock, FileKey } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">MutaCryptor Lite</h1>
            <p className="text-xl mb-8">Secure file encryption and management for enterprises. Simple, scalable, and efficient.</p>
            <div className="flex gap-4">
              <button onClick={() => window.open('https://mutaengine.cloud/download', '_blank')} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Now
              </button>
              <button onClick={() => window.open('https://mutaengine.cloud/demo', '_blank')}
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Try Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 bg-blue-800/30 rounded-full flex items-center justify-center">
              <Shield className="w-32 h-32 text-blue-400" />
              <div className="absolute -top-4 -right-4 bg-blue-500/20 p-4 rounded-full">
                <Lock className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500/20 p-4 rounded-full">
                <FileKey className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}