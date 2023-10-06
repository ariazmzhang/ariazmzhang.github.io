import React, { useState, useEffect } from 'react';

import {Header, MobileMenu, Button,Podcast, Bookshelf } from '../components';

const PodcastPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-screen h-screen bg-white flex flex-col mt-20">
      {/* Header */}
      <header className="z-50">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
    

      {/* Content */}
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4">
        {/* Left Column */}
        <div className="flex flex-grow flex-col lg:w-1/2 p-10 bg-transparent z-50">
          <Podcast />
        </div>
        {/* Right Column */}
        <div className="flex flex-grow flex-col lg:w-1/2 p-10 bg-transparent z-50">
            <Bookshelf />
        </div>
      </div>
      
    </div>
  );
    
}

export default PodcastPage;
