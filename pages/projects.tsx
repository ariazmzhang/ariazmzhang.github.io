import {Header, MobileMenu, Button, ProjectCard, Bookshelf } from '../components';

import React, { useState } from 'react';


export default function Features() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="relative inset-x-0 top-0 right-0 z-50">
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4 h-screen justify-center">
            <div className="max-w-5xl w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
                <ProjectCard 
                    title="Behavioral-Interview.ai"
                    techStack="Next.js, Typescript, Tailwindcss, Firebase"
                    descriptions={[
                        "Implemented a toolbox powered by GPT-4.0...",
                        "Utilized Firebase Storage to..."
                    ]}
                />
                <ProjectCard 
                    title="Behavioral-Interview.ai"
                    techStack="Next.js, Typescript, Tailwindcss, Firebase"
                    descriptions={[
                        "Implemented a toolbox powered by GPT-4.0...",
                        "Utilized Firebase Storage to..."
                    ]}
                />
            
                <ProjectCard 
                    title="Behavioral-Interview.ai"
                    techStack="Next.js, Typescript, Tailwindcss, Firebase"
                    descriptions={[
                        "Implemented a toolbox powered by GPT-4.0...",
                        "Utilized Firebase Storage to..."
                    ]}
                />  
        
                <ProjectCard 
                    title="Behavioral-Interview.ai"
                    techStack="Next.js, Typescript, Tailwindcss, Firebase"
                    descriptions={[
                        "Implemented a toolbox powered by GPT-4.0...",
                        "Utilized Firebase Storage to..."
                    ]}
                />
                
            </div>
        </div>
    </div>

  );
}
