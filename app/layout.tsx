"use client";
import { Web3Provider, Web3Context } from "../ethers/Context"; // Adjust path if needed
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Web3Provider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-3 m-0 p-0`}>
          <div className="w-full max-w-[1440px] mx-auto bg-purple-900 px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 space-y-4 sm:space-y-0">
              <Link href="/" className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-white hover:scale-110 transition-transform cursor-pointer">token</span>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">PEOPLE</h1>
              </Link>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
                <details className="relative w-full sm:w-auto">
                  <summary className="text-white cursor-pointer hover:opacity-80 transition-opacity list-none flex items-center justify-center sm:justify-start">
                    Explore
                    <span className="material-symbols-outlined ml-1">expand_more</span>
                  </summary>
                  <div className="absolute left-0 sm:right-0 mt-2 w-full sm:w-48 bg-white rounded-lg shadow-xl py-2 z-10">
                    <Link href="/events" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Popular POAPs</Link>
                    <Link href="/events" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Recent Events</Link>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-purple-100 transition-colors">Dashboard</Link>
                  </div>
                </details>
                <Web3Button />
              </div>
            </nav>
          </div>
          {children}
        </body>
      </html>
    </Web3Provider>
  );
}

function Web3Button() {
  const { connectWallet, disconnectWallet, connected } = useContext(Web3Context);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid rendering on the server

  return (
    <button
      className="w-full sm:w-auto bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-400 transition-colors"
      onClick={connected ? disconnectWallet : connectWallet}
    >
      {connected ? "Disconnect Wallet" : "Connect Wallet"}
    </button>
  );
}


 