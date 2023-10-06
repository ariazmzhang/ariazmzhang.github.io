import React, { useState } from 'react';
import {Header, MobileMenu, Experience } from '../components';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-10 mt-20">
        
        {/* Header */}
        {/* <header className="z-50">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header> */}
    
        {/* Content */}
      

        {/* Content on the right */}
        <div className="flex-1 pl-8">
        <Experience />
        </div>
    </div>
      
   
  );
}