import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="absolute top-0 left-64 w-[calc(100vw-16rem)] h-full flex items-center justify-center z-50">
      <div className="text-center bg-transparent max-w-2xl py-32 sm:py-48 lg:py-56">
        {/* -----------Main Content in Hero------------ */}
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
        <p className='text-center mx-5 p-10 text-lg text-purple-700 font-bold italic'>
          'Everything she tackles she conquers.'
        </p>
      </div>
    </div>
  );
}
