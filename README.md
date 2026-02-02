# ARAImage

منصة ذكاء اصطناعي عربية لتوليد الصور من النصوص.

## الميزات

- دعم كامل للغة العربية مع واجهة RTL
- قوالب متخصصة للسوق العربي
- نظام نقاط للشراء
- استوديو لتوليد الصور
- معرض لعرض الصور المولدة
- حساب وشراء نقاط إضافية

## التقنيات المستخدمة

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## البدء

1. تثبيت الحزم:
```bash
npm install
```

2. تشغيل خادم التطوير:
```bash
npm run dev
```

3. فتح المتصفح على:
```
http://localhost:3000
```

## الصفحات

- `/` - الصفحة الرئيسية
- `/studio` - استوديو توليد الصور
- `/templates` - عرض القوالب المتاحة
- `/gallery` - معرض الصور
- `/pricing` - الأسعار والباقات
- `/account` - حسابي
- `/policies/privacy` - سياسة الخصوصية
- `/policies/terms` - الشروط والأحكام

## API

### POST /api/auth
تسجيل الدخول أو التسجيل عبر البريد الإلكتروني

### POST /api/generate
توليد صورة جديدة
- `prompt`: وصف الصورة بالعربية
- `template`: معرف القالب (اختياري)
- `size`: حجم الصورة (square|story|ad)
- `style`: نمط الصورة (realistic|advertising|luxury|simple)

### POST /api/credits
شراء نقاط إضافية
- `userId`: معرف المستخدم
- `amount`: عدد النقاط

### GET /api/images
جلب الصور المولدة
- `userId`: معرف المستخدم

### POST /api/images
حفظ صورة مولدة

## الترخيص

جميع الحقوق محفوظة © 2025 ARAImage
