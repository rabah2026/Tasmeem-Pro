import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { CREDIT_PACKS } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الأسعار</h1>
          <p className="text-gray-600">
            اختر الباقة المناسبة لاحتياجاتك من صور
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDIT_PACKS.map((pack) => (
            <div
              key={pack.id}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all relative ${
                pack.popular
                  ? "border-2 border-purple-500 scale-105"
                  : "border border-gray-200"
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-l from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    الأكثر شيوعاً
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {pack.price === 0 ? "مجاناً" : `${pack.price} ${pack.currency}`}
                </p>
                <p className="text-gray-600">{pack.images} صور</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  جودة عالية
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  جميع القوالب
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  دعم فني
                </li>
              </ul>

              <Link href="/account" className="block">
                <Button
                  variant={pack.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {pack.price === 0 ? "ابدأ المجاني" : "اشتري الآن"}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-l from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            خصم 20% على جميع الباقات
          </h2>
          <p className="mb-6">
            استخدم الكود: WELCOME20 عند الشراء
          </p>
          <a
            href="/studio"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            ابدأ الآن
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
