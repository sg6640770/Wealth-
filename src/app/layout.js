
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {HeroSection} from "@/components/HeroSection"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navbar"
import Features from "@/components/Features";
import InvestmentProducts from "@/components/InvestmentProducts";
import AIChatbotSection from "@/components/AIChatbotSection";
import SuccessStories from "@/components/SuccessStories";
import KnowledgeHub from "@/components/KnowledgeHub";
import SecurityTrust from "@/components/SecurityTrust";
import Footer from "@/components/Footer"
import MarketTicker from '@/components/MarketTicker';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <HeroSection/>
        <MarketTicker />
        <Features/>
        <InvestmentProducts/>
        <AIChatbotSection/>
        <SuccessStories/>
        <KnowledgeHub/>
        <SecurityTrust/>
        <Footer/>
        
        {children}
      </body>
    </html>
  );
}
