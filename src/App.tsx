import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Features />
      <CallToAction />
    </div>
  );
}

export default App;