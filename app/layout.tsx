import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkedin",
  description: "Linkedin Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <Navbar />
          <div className="md:bg-[#F4F2EE] flex-1 w-full ">
            <main className="max-w-6xl mx-auto">{children}</main>
          </div> 
        </body>
      </html>
    </ClerkProvider>
  );
}
