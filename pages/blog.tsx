import React, { useState } from 'react';

import {Header, MobileMenu } from '../components';

const Home = () => {
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
          I want this to be a board view like Notion board view to show the dishes I have, we can upload picture, recognize the time and location of the picture 
          or manually fill in information
        </div>
      </div>
    );
    
};

export default Home;
