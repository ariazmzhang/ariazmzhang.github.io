import React from "react";
import Button from "./Button";

export default function Hero() {
  return (    
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          {/* -----------Main Content in Hero------------ */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              H
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              i&nbsp;
              </span>
              there, th
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              i
              </span>
              s&nbsp; 
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              
              </span>
              is Ar
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              i
              </span>a.
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-50">
            I'm a <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              P
              </span>rogrammer, a <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              P
              </span>odcaster, and a <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              B
              </span>ookworm.
            </p>
            <p className='text-center mx-5 p-10 text-lg text-purple-700 font-bold italic'>'Everything she tackles she conquers.'</p>

            {/* -----------Register------------ */}
            <div className="flex items-center justify-center gap-x-6 mt-10">
              <Button data="Github" link="https://github.com/ariazmzhang"/>
              <Button data="LinkedIn" link="https://www.linkedin.com/in/zhimengzhang/"/>
              <Button data="Email" link="mailto:zmzhangg@gmail.com"/>
    {/* <a
        href="https://github.com/ariazmzhang"
        className="rounded-md animate-text bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        My Github
    </a>
    <a
        href="https://www.linkedin.com/in/zhimengzhang/"
        className="rounded-md animate-text bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        My LinkedIn
    </a>
    <a
        href="mailto:zmzhangg@gmail.com"
        className="rounded-md animate-text bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        My Email
    </a> */}
</div>


          </div>

        </div>
      </div>
  );
}
