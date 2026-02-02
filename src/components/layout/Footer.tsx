import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                ت
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 block leading-none">تصميم</span>
                <span className="text-xs text-slate-400 font-medium">نظام الهويات البصرية الذكي</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              منصة احترافية موجهة للوكالات والشركات الخليجية.
              تساعدك على بناء محتوى متسق بصرياً مع هويتك التجارية بنقرة زر.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-100 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer">X</div>
              <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-100 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer">In</div>
            </div>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Column 1 (Product) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6">المنتج</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/studio" className="hover:text-blue-600 transition-colors">الاستوديو</Link></li>
              <li><Link href="/onboarding" className="hover:text-blue-600 transition-colors">إعداد الهوية</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">الباقات</Link></li>
            </ul>
          </div>

          {/* Links Column 2 (Company) */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6">الشركة</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">اتصل بنا</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">المدونة</Link></li>
            </ul>
          </div>

          {/* Links Column 3 (Legal) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6">قانوني</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/license" className="hover:text-blue-600 transition-colors">اتفاقية الاستخدام التجاري</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Tasmeem Pro. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <span>صنع بفخر في السعودية 🇸🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
