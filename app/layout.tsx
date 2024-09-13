import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from '../components/Sidebar';
import GradientBackground from '../components/GradientBackground';
import '../styles/GradientBackground.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <GradientBackground className='fixed' />
        <div className="flex h-screen overflow-hidden">
          {/* Fixed Sidebar */}
          <div className="flex-shrink-0 flex flex-grow">
            <Sidebar />
          </div>
          
          {/* Scrollable Main Content */}
          <main className="flex-grow overflow-y-auto">
            <div className="p-8 pb-20">
              {children}  {/* Render the specific page content */}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}