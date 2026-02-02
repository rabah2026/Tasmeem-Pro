"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/common/Button";

export default function AccountPage() {
  const [user] = useState({
    email: "user@example.com",
    credits: 5,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">حسابي</h1>
          <p className="text-gray-600">
            إدارة حسابك وعرض رصيدك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">الرصيد</h3>
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-4xl font-bold text-purple-600 mb-2">
              {user.credits}
            </p>
            <p className="text-gray-600">صورة متبقية</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">البريد</h3>
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-900 mb-2">
              {user.email}
            </p>
            <p className="text-gray-600">تم التسجيل بنجاح</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">الحالة</h3>
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-green-600 mb-2">
              نشط
            </p>
            <p className="text-gray-600">الحساب مفعل</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            شراء رصيد إضافي
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border-2 border-gray-200 rounded-xl p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
              <p className="text-2xl font-bold text-gray-900 mb-1">50</p>
              <p className="text-gray-600 mb-3">صورة</p>
              <p className="text-lg font-bold text-purple-600 mb-3">49 ر.س</p>
              <Button variant="outline" size="sm" className="w-full">
                اشترِ الآن
              </Button>
            </div>

            <div className="border-2 border-purple-500 rounded-xl p-4 text-center bg-purple-50">
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                الأفضل
              </span>
              <p className="text-2xl font-bold text-gray-900 mb-1 mt-2">150</p>
              <p className="text-gray-600 mb-3">صورة</p>
              <p className="text-lg font-bold text-purple-600 mb-3">129 ر.س</p>
              <Button size="sm" className="w-full">
                اشترِ الآن
              </Button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-4 text-center hover:border-purple-500 transition-colors cursor-pointer">
              <p className="text-2xl font-bold text-gray-900 mb-1">500</p>
              <p className="text-gray-600 mb-3">صورة</p>
              <p className="text-lg font-bold text-purple-600 mb-3">349 ر.س</p>
              <Button variant="outline" size="sm" className="w-full">
                اشترِ الآن
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
