"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import type { GeneratedImage } from "@/types";

export default function GalleryPage() {
  const [images] = useState<GeneratedImage[]>([]);
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LoadingSpinner />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">المعرض</h1>
          <p className="text-gray-600">
            جميع الصور التي قمت بإنشائها مخزنة هنا
          </p>
        </div>

        {images.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              لا توجد صور حتى الآن
            </h3>
            <p className="text-gray-600 mb-6">
              ابدأ بإنشاء صورك الأولى في الاستوديو
            </p>
            <a
              href="/studio"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-l from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              ابدأ الإنشاء
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {image.prompt}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(image.createdAt).toLocaleDateString("ar-SA")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
