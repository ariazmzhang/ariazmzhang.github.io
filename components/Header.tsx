import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
    { name: "MyFav", href: "/features" },
    { name: "YumBlog", href: "/blog" },
    { name: "AboutUs", href: "/pricing" },
  ];

export default function Header({ setMobileMenuOpen }) {
  return (
    
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      {/* Logo */}
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">My Fav Restaurants</span>
          <img className="h-12 w-auto" src="/noodle.png" alt="my logo" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
            {item.name}
          </a>
        ))}
      </div>

      {/* Login */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
