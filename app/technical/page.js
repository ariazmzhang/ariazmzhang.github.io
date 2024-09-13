"use client";

import { ProjectCard } from '../../components'; // Adjust the import paths as necessary
import React, { useState } from 'react';

export default function TechnicalPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4 justify-center">
        <div className="max-w-5xl w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
          <ProjectCard 
            title="Behavioral-Interview.ai"
            link='https://github.com/ariazmzhang/behavioralinterview.ai'
            techStack="Next.js, Typescript, Tailwindcss, Firebase"
            descriptions={[
              "Story Creation and Management: Users can create and manage their personal repository of stories...",
              "AI-Driven Story Analysis: The application employs the ChatGPT API to analyze the effectiveness...",
              "Interview Scenario Simulations: The project offers a range of interview scenario simulations...",
              "Integration with Firebase: The Firebase backend provides secure user authentication..."
            ]}
            imgSrc="images/behavioral_ai.png"
          />
          <ProjectCard 
            title="Search Engine 1.0 & 2.0"
            link='https://github.com/ariazmzhang/java-based-search-engine'
            techStack="Python, Java, NumPy, urllib, JavaFX"
            descriptions={[
              "Developed Search Engine 1.0 in Python, efficiently crawling over 1,000 interlinked websites...",
              "Leveraged cosine similarity scoring calculation between user search query and crawled pages...",
              "Employed PageRank algorithm to rank crawled web pages...",
              "Refined the architecture using OOP principles...",
              "Augmented the user experience by crafting an intuitive graphical user interface (GUI)..."
            ]}
            imgSrc="images/java_search_engine.png"
          />
          <ProjectCard 
            title="Feedback-Collection"
            link='https://github.com/ariazmzhang/feedback-collection'
            techStack="React, Node.js, Express, MongoDB"
            descriptions={[
              "Created a web application for startup owners to send bulk feedback request emails...",
              "Implemented Google OAuth API using Passport.js middleware...",
              "Utilized MongoDB/Mongoose for storing client information and manage credit cards..."
            ]}
            imgSrc="images/feedback.png"
          />  
          <ProjectCard 
            title="Ghost Hunting Game"
            link='https://github.com/ariazmzhang/Ghost-Hunting-Game'
            techStack="C, Linux, semaphore.h, pthread.h, Valgrind, Makefile"
            descriptions={[
              "Developed a multi-threaded ghost hunting simulation in C...",
              "Incorporated semaphores to ensure thread-safety...",
              "Employed Valgrind for memory management..."
            ]}
            imgSrc="images/ghosthunter.png"
          />
        </div>
      </div>
    </div>
  );
}
