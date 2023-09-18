// pages/index.tsx
import { Hero, Header, MobileMenu } from '../components';
import React, { useState } from 'react';


const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-purple-500 w-screen h-screen flex flex-row justify-center items-center">
        <header className="absolute inset-x-0 top-0 z-50">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        {/* <Hero /> */}
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
        <Hero />
    </div>
  );
};

export default HomePage;