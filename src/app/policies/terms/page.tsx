import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            الشروط والأحكام
          </h1>
          <p className="text-gray-600">
            آخر تحديث: {new Date().toLocaleDateString("ar-SA")}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. القبول بالشروط
            </h2>
            <p className="text-gray-600 leading-relaxed">
              باستخدامك لخدمات ARAImage، فإنك توافق على الالتزام بهذه الشروط
              والأحكام. إذا لم توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. استخدام الخدمة
            </h2>
            <p className="text-gray-600 leading-relaxed">
              توافق على استخدام الخدمة فقط للأغراض المشروعة. لا يجوز استخدام
              الخدمة لإنشاء صور تحتوي على محتوى غير قانوني أو مسيء أو ينتهك حقوق
              الآخرين.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              3. المحتوى الممنوع
            </h2>
            <p className="text-gray-600 leading-relaxed">
              لا يجوز إنشاء صور تحتوي على:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 mr-4">
              <li>أشخاص حقيقيين</li>
              <li>الرموز الحكومية الوطنية</li>
              <li>الشعارات والعلامات التجارية المسجلة</li>
              <li>محتوى عنيف أو إباحي</li>
              <li>محتوى يحض على الكراهية أو التمييز</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              4. نظام النقاط
            </h2>
            <p className="text-gray-600 leading-relaxed">
              يستخدم النظام نظام نقاط للسماح بإنشاء الصور. يتم خصم نقطة واحدة
              لكل صورة تم إنشاؤها. يمكنك شراء نقاط إضافية من صفحة الأسعار.
              النقاط غير قابلة للاسترداد.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5. الملكية الفكرية
            </h2>
            <p className="text-gray-600 leading-relaxed">
              تظل الملكية الفكرية للصور التي تقوم بإنشائها ملكاً لك. ومع ذلك،
              تمنحك ARAImage ترخيصاً لاستخدام الصور التي تم إنشاؤها لأي غرض قانوني.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              6. المسؤولية
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نحن لا نضمن أن الخدمة ستعمل بشكل متواصل أو خالٍ من الأخطاء. لن نكون
              مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم قدرتك على استخدام الخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              7. الإنهاء
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نحتفظ بالحق في إنهاء أو تعليق حسابك في أي وقت دون إشعار مسبق إذا
              انتهكت هذه الشروط أو استخدمت الخدمة بطريقة غير مقبولة.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              8. اتصل بنا
            </h2>
            <p className="text-gray-600 leading-relaxed">
              إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر
              البريد الإلكتروني: support@araimage.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
