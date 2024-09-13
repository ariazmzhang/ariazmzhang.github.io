import Hero from '../components/Hero';

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Aria's Space",
  description: "Aria's personal website",
  icons: "/favicon.ico",

}

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-grow p-8 pb-20">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <Hero />
        </main>
      </div>
    </div>
  );
}
