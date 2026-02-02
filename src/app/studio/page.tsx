"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBrand } from "@/context/BrandContext";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/common/Button";

export default function Studio() {
  const router = useRouter();
  const { profile } = useBrand();

  // Guard: Redirect if not onboarding
  useEffect(() => {
    if (!profile.isConfigured) {
      router.push('/onboarding');
    }
  }, [profile, router]);

  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!prompt) return;
    setIsGenerating(true);

    // Simulation of brand-constrained generation
    setTimeout(() => {
      setGeneratedImage("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop");
      setIsGenerating(false);
    }, 2000);
  };

  if (!profile.isConfigured) return null; // Prevent flash

  // Brand Anchor Values
  const identityValues = [
    profile.userType === 'company' ? 'شركة' : 'فرد',
    // profile.audience (if added later),
    profile.tone === 'professional' ? 'نبرة مهنية' : 'نبرة عصرية'
  ].filter(Boolean).join(' · ');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <div className="flex-1 flex pt-16">

        {/* Sidebar (Controls) */}
        <aside className="w-96 bg-white border-l border-slate-200 p-6 flex flex-col gap-8 overflow-y-auto z-10 shadow-sm transition-all h-[calc(100vh-4rem)] sticky top-16">

          {/* 1. Brand Anchor (Persistent Indicator) */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">الهوية الحالية</span>
              <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                نشط
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                {profile.userType === 'company' ? '🏢' : '👤'}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{identityValues}</p>
                <button onClick={() => router.push('/onboarding')} className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-0.5">
                  تعديل الهوية
                </button>
              </div>
            </div>
          </div>

          {/* 2. Content Input */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              وصف المحتوى
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 p-4 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-0 transition-colors text-slate-900 text-base resize-none placeholder:text-slate-400"
              placeholder="مثال: صورة لمكتب حديث... (سيبقى الأسلوب ثابتًا)"
              dir="rtl"
            />
            <p className="text-xs text-slate-400 mt-2">
              سيبقى الأسلوب ثابتًا وفق هويتك الحالية.
            </p>
          </div>

          {/* 3. Output Format */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-3">
              حجم التصميم
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '16:9', label: 'بنر عريض' },
                { id: '4:5', label: 'سوشيال' },
                { id: '9:16', label: 'ستوري' }
              ].map((ratio) => (
                <button
                  key={ratio.id}
                  onClick={() => setAspectRatio(ratio.id)}
                  className={`py-3 px-2 rounded-lg text-xs font-bold border transition-all ${aspectRatio === ratio.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                >
                  {ratio.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <Button
              onClick={handleCreate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full py-4 text-lg shadow-lg shadow-blue-900/10 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800"
              isLoading={isGenerating}
            >
              {isGenerating ? 'جاري تطبيق الهوية...' : 'أنشئ نسخة متسقة مع هويتك'}
            </Button>
            {generatedImage && (
              <p className="text-center text-xs text-slate-400 mt-3 cursor-pointer hover:text-slate-600 transition-colors" onClick={handleCreate}>
                أنشئ نسخة أخرى بنفس الأسلوب
              </p>
            )}
          </div>

        </aside>

        {/* Main Canvas (Preview) */}
        <main className="flex-1 bg-slate-50 p-8 flex flex-col items-center justify-center h-[calc(100vh-4rem)] overflow-y-auto relative">

          {/* Top Bar Anchor (Visual Reinforcement) */}
          <div className="absolute top-6 right-8 left-8 flex justify-between items-center opacity-50 pointer-events-none">
            <span className="text-xs font-bold text-slate-400">Tasmeem Studio v1.0</span>
            <span className="text-xs font-bold text-slate-400">System Locked</span>
          </div>

          {generatedImage ? (
            <div className="flex flex-col items-center gap-4 animate-fade-in w-full max-w-4xl">
              <div className="relative group w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white">
                <Image
                  src={generatedImage}
                  alt="Generated"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-white transition-all">تحميل</button>
                </div>
              </div>

              {/* Output Reinforcement */}
              <div className="flex items-center gap-2 text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-medium">هذا التصميم يلتزم بهويتك الحالية.</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 max-w-sm">
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl opacity-50 border border-slate-200">
                🎨
              </div>
              <h2 className="text-xl font-bold text-slate-500 mb-2">مساحة العمل جاهزة</h2>
              <p className="text-sm leading-relaxed">
                أدخل المحتوى، وسيقوم النظام بتطبيق قواعد هويتك (الألوان، الخطوط، النمط) تلقائياً.
              </p>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}
