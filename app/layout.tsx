import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apples International Limited - Premier Cleaning, Pest Control, and Painting Services",
  description: "Apples International Limited offers top-tier cleaning, pest control, painting, and wallpaper installation services. We specialize in comprehensive solutions for residential and commercial spaces, including office and kitchen cleaning. Trust us for a spotless, pest-free, and beautifully painted environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <GoogleAnalytics/>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-[5.5rem] sm:pt-[4.5rem] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#eccfd0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#754d4d]"></div>
        <div className="bg-[#e1f7e1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3b3b0e]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
