import React from "react";
import Footer from "./myCustomComponents/footer";
import Header from "./myCustomComponents/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster"

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
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

interface LayoutProps {
  children: React.ReactNode;
  types?: string; // Assuming `types` is optional
}

const LandingLayout = ({ children, types }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />

        <div
          className="h-auto bg-[#FDFDFD] pb-24 text-lg"
          style={{ fontFamily: "DosisMedium" }}
        >
          <main>{children}</main>
        </div>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
};

export default LandingLayout;
