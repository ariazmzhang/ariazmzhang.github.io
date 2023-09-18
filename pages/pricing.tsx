import React, { useState } from 'react';
import {Header, MobileMenu } from '../components';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-purple-500 w-screen h-screen flex flex-col">
        
        {/* Header */}
        <header className="z-50">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    
        {/* Content */}
        <div className="flex-grow flex flex-col lg:flex-row h-full bg-gray-100 text-black">
          This to be a notion public page
        </div>
      </div>
   
  );
}