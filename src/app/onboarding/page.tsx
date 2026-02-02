"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBrand, BrandTone, UserType } from "@/context/BrandContext";
import { Button } from "@/components/common/Button";
import Navbar from "@/components/layout/Navbar";

const STEPS = [
    { id: 1, title: "نوع الحساب" },
    { id: 2, title: "نبرة التواصل" },
    { id: 3, title: "تعريف الهوية" },
];

export default function Onboarding() {
    const router = useRouter();
    const { profile, updateProfile, lockProfile } = useBrand();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (step < 3) setStep(s => s + 1);
    };

    const handleFinish = async () => {
        setLoading(true);

        // Simulate "AI Analysis" of the choices to pick a preset
        // In a real app this might analyze an uploaded logo
        let derivedPreset: any = 'modern-business';

        if (profile.tone === 'modern') derivedPreset = 'social-bold';
        if (profile.tone === 'simple') derivedPreset = 'elegant-minimal';
        if (profile.userType === 'individual' && profile.tone === 'simple') derivedPreset = 'clean-retail';

        // Lock it
        lockProfile({
            ...profile,
            activePreset: derivedPreset,
            // Mocking a color extraction or default
            primaryColor: profile.userType === 'company' ? '#0F172A' : '#2563EB'
        });

        // Artifical delay for "System Configuration"
        setTimeout(() => {
            setLoading(false);
            router.push('/studio');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="pt-32 pb-20 max-w-2xl mx-auto px-4">

                {/* Progress */}
                <div className="mb-12 flex items-center justify-between relative">
                    <div className="absolute h-1 bg-slate-200 left-0 right-0 top-1/2 -z-10" />
                    {STEPS.map((s) => (
                        <div key={s.id} className={`flex flex-col items-center gap-2 bg-slate-50 px-2 transition-colors ${step >= s.id ? 'text-blue-600' : 'text-slate-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= s.id ? 'border-blue-600 bg-blue-50' : 'border-slate-300 bg-slate-100'}`}>
                                {s.id}
                            </div>
                            <span className="text-xs font-medium">{s.title}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">

                    {/* STEP 1: USER TYPE */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">هل أنت فرد أم شركة؟</h1>
                            <p className="text-slate-500 mb-8">يساعدنا هذا الاختيار على ضبط نبرة التصميم بما يناسبك.</p>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => updateProfile({ userType: 'individual' })}
                                    className={`p-6 rounded-xl border-2 text-center transition-all ${profile.userType === 'individual' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 hover:border-slate-300'}`}
                                >
                                    <span className="text-3xl mb-3 block">👤</span>
                                    <span className="font-bold text-slate-900 block">فرد / مستقل</span>
                                </button>

                                <button
                                    onClick={() => updateProfile({ userType: 'company' })}
                                    className={`p-6 rounded-xl border-2 text-center transition-all ${profile.userType === 'company' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-100 hover:border-slate-300'}`}
                                >
                                    <span className="text-3xl mb-3 block">🏢</span>
                                    <span className="font-bold text-slate-900 block">منشأة / شركة</span>
                                </button>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button onClick={handleNext} size="lg">التالي</Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: TONE */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">نبرة التواصل</h1>
                            <p className="text-slate-500 mb-8">كيف تريد أن تظهر علامتك التجارية للجمهور؟</p>

                            <div className="space-y-3">
                                {[
                                    { id: 'professional', label: 'رسمي ومهني (Corporate)', icon: '👔' },
                                    { id: 'modern', label: 'عصري وجريء (Modern)', icon: '🚀' },
                                    { id: 'simple', label: 'بسيط وهادئ (Minimal)', icon: '🍃' }
                                ].map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => updateProfile({ tone: t.id as BrandTone })}
                                        className={`w-full p-4 rounded-xl border-2 text-right transition-all flex items-center gap-4 ${profile.tone === t.id ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-slate-300'}`}
                                    >
                                        <span className="text-2xl">{t.icon}</span>
                                        <span className="font-bold text-slate-900">{t.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-600 text-sm">عودة</button>
                                <Button onClick={handleNext} size="lg">التالي</Button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: CONFIRM & LOCK */}
                    {step === 3 && (
                        <div className="animate-fade-in text-center">
                            <h1 className="text-2xl font-bold text-slate-900 mb-2">جاهز للإعداد</h1>
                            <p className="text-slate-500 mb-8">سيقوم النظام الآن بتثبيت إعدادات الهوية الخاصة بك.</p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-right mb-8 inline-block w-full text-sm">
                                <div className="flex justify-between py-2 border-b border-slate-200">
                                    <span className="text-slate-500">نوع الحساب</span>
                                    <span className="font-bold text-slate-900">{profile.userType === 'individual' ? 'فرد' : 'شركة'}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-slate-200">
                                    <span className="text-slate-500">النبرة</span>
                                    <span className="font-bold text-slate-900">{profile.tone}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-slate-500">النظام المقترح</span>
                                    <span className="font-bold text-blue-600">{
                                        profile.tone === 'professional' ? 'Modern Business' :
                                            profile.tone === 'modern' ? 'Social Bold' : 'Elegant Minimal'
                                    }</span>
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 mb-6">
                                سيتم تطبيق هذه الهوية على جميع التصاميم القادمة.
                            </p>

                            <Button onClick={handleFinish} isLoading={loading} size="lg" className="w-full">
                                {loading ? 'جاري تهيئة الاستوديو...' : 'الانتقال إلى الاستوديو'}
                            </Button>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
