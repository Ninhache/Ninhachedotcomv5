import { cn } from "@/lib/utils";
import "@/public/styles/loading.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { ThemeProvider } from "./_components/contexts/themeProvider";
import { Navbar } from "./_components/clients/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, calSans.variable)}>
      <body
        className={cn(
          `bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : ""} overflow-x-hidden`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
