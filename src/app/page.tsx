"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/common/Button";

// Professional, calm imagery
const HERO_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-1">

        {/* 1. Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              تصاميم متسقة. <br />
              هوية راسخة.
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              حوّل المحتوى إلى تصاميم احترافية تلتزم تماماً بقواعد هويتك البصرية.
              نظام تصميم ذكي يضمن الجودة والاتساق في كل مرة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/onboarding">
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-slate-900 hover:bg-slate-800 shadow-none">
                  ابدأ الاستخدام
                </Button>
              </Link>
            </div>

            <div className="mt-20 relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <Image
                src={HERO_IMAGE}
                alt="Tasmeem Dashboard"
                fill
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

          </div>
        </section>

        {/* 2. What Tasmeem Does */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">نظام تصميم، ليس أداة توليد عشوائية</h2>
            <p className="text-lg text-slate-600 leading-loose">
              تصميم (Tasmeem) ليس مجرد أداة لإنشاء الصور. إنه نظام متكامل يحفظ بصمتك البصرية.
              بدلاً من الحصول على نتائج عشوائية في كل مرة، يضمن لك النظام تصاميم تتبع نفس الألوان، الخطوط، والنمط البصري الذي حددته مسبقاً.
              Tasmeem لا ينشئ تصاميم عشوائية، بل يطبّق هوية ثابتة على كل محتوى.
            </p>
          </div>
        </section>

        {/* 3. How It Works */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">

              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-2xl mx-auto border border-slate-200">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">حدد هويتك</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  اختر نمطك البصري (شركة، فرد، عصري، رسمي) مرة واحدة فقط عند البداية.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-2xl mx-auto border border-slate-200">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">أضف المحتوى</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  اكتب وصفاً بسيطاً لما تريد. لا حاجة لتعلم هندسة الأوامر المعقدة.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-2xl mx-auto border border-slate-200">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">احصل على التصميم</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  استلم تصاميم جاهزة ومتسقة تماماً مع هويتك البصرية في ثوانٍ.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Why Consistency Matters */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="w-full aspect-square bg-slate-800 rounded-2xl border border-slate-700 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4 w-full opacity-50">
                  <div className="aspect-[4/5] bg-slate-700 rounded-lg"></div>
                  <div className="aspect-[4/5] bg-slate-700 rounded-lg"></div>
                  <div className="aspect-[4/5] bg-slate-700 rounded-lg"></div>
                  <div className="aspect-[4/5] bg-slate-700 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">لماذا الالتزام بالهوية؟</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  الثقة تُبنى بالتكرار. العلامات التجارية القوية لا تغير شكلها كل يوم.
                  عندما تستخدم أدوات توليد عشوائية، فإنك تشتت جمهورك بتصاميم متنافرة.
                </p>
                <p>
                  يركز (Tasmeem) على مبدأ "الاتساق قبل الإبهار". نحن نضمن أن كل صورة تنتجها تبدو وكأنها خرجت من نفس الاستوديو، ومن نفس المصمم، لنفس العلامة التجارية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Who Tasmeem Is For */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">مصمم لمن يقدر النظام</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">الأفراد وصناع المحتوى</h3>
                <p className="text-slate-500 text-sm">
                  لأولئك الذين يريدون مظهراً احترافياً لحساباتهم الشخصية دون قضاء ساعات في التصميم.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">الشركات الناشئة</h3>
                <p className="text-slate-500 text-sm">
                  ابنِ هوية بصرية قوية منذ اليوم الأول بتكلفة معقولة وبدون الحاجة لفريق تصميم ضخم.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">فرق التسويق</h3>
                <p className="text-slate-500 text-sm">
                  وحّد مخرجات فريقك. تأكد من أن الجميع يلتزم بنفس المعايير البصرية مهما كثر المحتوى.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">ابدأ بهوية، لا بصفحة بيضاء.</h2>
            <div className="flex justify-center">
              <Link href="/onboarding">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/10">
                  أنشئ هويتك الآن
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-slate-400 text-sm">
              لا يتطلب بطاقة ائتمان للبدء.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
