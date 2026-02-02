import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasmeem - تصميم",
  description: "نظام تصميم ذكي للهويات البصرية العربية | Smart Arabic Design System",
};

import { BrandProvider } from "@/context/BrandContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
        <BrandProvider>
          {children}
        </BrandProvider>
      </body>
    </html>
  );
}
