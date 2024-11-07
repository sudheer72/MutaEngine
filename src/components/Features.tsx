import React from 'react';
import { Files, Cpu, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: <Files className="w-12 h-12 text-blue-500" />,
    title: 'Unlimited File Support',
    description: 'Process and manage unlimited files with robust encryption capabilities.'
  },
  {
    icon: <Cpu className="w-12 h-12 text-blue-500" />,
    title: 'Single-Node Processing',
    description: 'Efficient processing without complex infrastructure requirements.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: 'Advanced Security',
    description: 'State-of-the-art encryption for your sensitive data and files.'
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-500" />,
    title: 'Intuitive Management',
    description: 'User-friendly tools for seamless file handling and organization.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}