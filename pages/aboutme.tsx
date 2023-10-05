import React, { useState } from 'react';
import {Header, MobileMenu, Experience } from '../components';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  return (
    <div className="w-screen h-screen flex flex-col z-50">
        
        {/* Header */}
        <header className="z-50">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    
        {/* Content */}
        <div className="p-5 mb-6 text-black shadow-lg rounded-md bg-opacity-50 flex z-50">
      

        {/* Content on the right */}
        <div className="flex-1 pl-8">
        <Experience />
        </div>
    </div>
      </div>
   
  );
}