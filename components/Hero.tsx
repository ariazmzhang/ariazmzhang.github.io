import React from "react";


export default function Hero() {
  return (    
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          {/* -----------Road Map------------ */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/60 hover:ring-white">
              Check out our roadmap.{" "}
              <a href="#" className="font-semibold text-indigo-500/50">
                <span className="absolute inset-0" aria-hidden="true" />
                  Read more 
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* -----------Main Content in Hero------------ */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              My&nbsp;F
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              a
              </span>
              vorite R
              <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                e
              </span>
              staurant
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-50">
              Store your favorite restaurants on cloud
            </p>

            {/* -----------Register------------ */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md animate-text  bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </a>
            </div>

          </div>

        </div>
      </div>
  );
}
