"use client"; 

import React, { useState } from 'react';
import {Header, MobileMenu, Experience } from '../../components';

export default function AboutMePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4 justify-center mt-20">
        {/* Content */}
        <div className="w-full h-screen bg-white flex flex-col">
          <Experience />
        </div>
    </div>
  );
}