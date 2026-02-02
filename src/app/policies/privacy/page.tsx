import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            سياسة الخصوصية
          </h1>
          <p className="text-gray-600">
            آخر تحديث: {new Date().toLocaleDateString("ar-SA")}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. جمع المعلومات
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نحن نجمع المعلومات التي تقدمها عند استخدام خدماتنا، بما في ذلك:
              عنوان البريد الإلكتروني، والوصف النصي للصور، والصور التي تقوم
              بإنشائها.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. استخدام المعلومات
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نستخدم معلوماتك لتحسين خدماتنا، وتوفير الدعم الفني، وإرسال
              التحديثات الهامة حول خدماتنا. لن نشارك معلوماتك مع أطراف ثالثة
              لأغراض تسويقية.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              3. خصوصية الصور
            </h2>
            <p className="text-gray-600 leading-relaxed">
              جميع الصور التي تقوم بإنشائها خاصة بك ومحمية. لن نقوم بمشاركتها أو
              عرضها علناً دون إذنك. يتم تخزين الصور بشكل آمن ومشفّر على خوادمنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. الأمان
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نحن نتخذ إجراءات أمنية قوية لحماية معلوماتك، بما في ذلك التشفير
              والتحكم في الوصول. لكن لا يمكننا ضمان الأمان المطلق على الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. حقوقك
            </h2>
            <p className="text-gray-600 leading-relaxed">
              لديك الحق في طلب نسخة من معلوماتك، وتصحيح المعلومات غير الدقيقة،
              وحذف حسابك ومعلوماتك. يمكنك القيام بذلك من خلال صفحة الحساب.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. تغييرات على هذه السياسة
            </h2>
            <p className="text-gray-600 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإبلاغك بأي
              تغييرات مهمة عبر البريد الإلكتروني.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
