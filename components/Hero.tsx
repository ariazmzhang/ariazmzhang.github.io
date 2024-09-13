import React from "react";
import Button from "./Button";

export default function Hero() {
  return (    
    <div className="flex justify-center items-center h-screen px-6 lg:px-8 z-50">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {/* -----------Main Content in Hero------------ */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          H
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            i&nbsp;
          </span>
          there, this is Aria.
        </h1>
  
        <p className="mt-6 text-lg leading-8 text-neutral-50">
          I'm a&nbsp; 
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            P
          </span>
          rogrammer, a&nbsp; 
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            P
          </span>
          odcaster, and a&nbsp; 
          <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          B 
          </span>
          ookworm.
        </p>
        <p className='text-center mx-5 p-10 text-lg text-purple-700 font-bold italic'>'Everything she tackles she conquers.'</p>
  
        {/* -----------Register------------ */}
        <div className="flex items-center justify-center gap-x-6 mt-10">
          <Button data="Github" link="https://github.com/ariazmzhang"/>
          <Button data="LinkedIn" link="https://www.linkedin.com/in/zhimengzhang/"/>
          <Button data="Email" link="mailto:zmzhangg@gmail.com"/>
        </div>
      </div>
    </div>
  </div>
  
  );
}
