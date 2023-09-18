import {Header, MobileMenu, GoogleMap, Table } from '../components';

import React, { useState } from 'react';


export default function Features() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-screen h-screen bg-purple-500 flex flex-col">

      {/* Header */}
      <header className="relative inset-x-0 top-0 right-0 z-50">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4">

        {/* Left Column */}
        <div className="w-1/2 p-5">
          
          <Table />
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:w-1/2 p-10 bg-transparent">
          <GoogleMap />
        </div>

      </div>
    </div>

  );
}
