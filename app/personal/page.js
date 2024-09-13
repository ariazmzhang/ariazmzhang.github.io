"use client";  // Mark the component as a Client Component if it uses hooks

import {Podcast, Bookshelf } from '../../components';
import React, { useState } from 'react';


export default function PersonalPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Content */}
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100">
        
        {/* Left Column */}
        <div className="flex flex-grow flex-col bg-transparent z-50">
          <Podcast />
        </div>
        
      </div>
    </div>
  );
    
}

