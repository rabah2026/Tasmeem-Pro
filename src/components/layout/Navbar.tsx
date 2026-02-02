"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/common/Button";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              ت
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              تصميم <span className="text-slate-400 font-normal text-sm">PRO</span>
            </span>
          </Link>

          {/* Minimal Nav */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse gap-4">

            {/* Status Indicator (Mock) */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-medium text-slate-600">النظام نشط</span>
            </div>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <Link href="/onboarding">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">
                هوية جديدة
              </Button>
            </Link>

            <Link href="/studio">
              <Button variant="primary" size="sm" className="bg-slate-900 hover:bg-slate-800 text-white shadow-none rounded-lg px-6">
                الاستوديو
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile Menu Placeholder */}
          </div>
        </div>
      </div>
    </nav>
  );
}
