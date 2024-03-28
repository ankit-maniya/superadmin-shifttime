"use client"

import { Inter } from "next/font/google";
import "./css/globals.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react"; 

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export default function RootLayout({ children }) {

  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <ToastContainer />
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
