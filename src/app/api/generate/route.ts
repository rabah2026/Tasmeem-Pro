import { NextRequest, NextResponse } from "next/server";

interface GenerateRequest {
  prompt: string;
  template?: string;
  size: "square" | "story" | "ad";
  style: "realistic" | "advertising" | "luxury" | "simple";
}

const BLOCKED_WORDS = [
  "شخص",
  "وجه",
  "بشر",
  "رئيس",
  "ملك",
  "حكومة",
  "شعار",
  "علامة تجارية",
];

function isContentBlocked(prompt: string): boolean {
  const lowerPrompt = prompt.toLowerCase();
  return BLOCKED_WORDS.some((word) => lowerPrompt.includes(word));
}

function enhanceArabicPrompt(
  prompt: string,
  style: string,
  template?: string
): string {
  let enhanced = prompt;

  if (style === "luxury") {
    enhanced += ", إضاءة ذهبية فاخرة, خلفية رخام, جودة عالية, احترافي";
  } else if (style === "realistic") {
    enhanced += ", واقعي, إضاءة طبيعية, تفاصيل واضحة";
  } else if (style === "advertising") {
    enhanced += ", إعلاني, جذاب, ألوان مشرقة";
  }

  if (template === "perfume-ad") {
    enhanced += ", عطر, زجاجة أنيقة, بخاخ, غلاف فاخر";
  } else if (template === "coffee-ad") {
    enhanced += ", قهوة, فنجان, بخار, حبوب";
  } else if (template === "restaurant-ad") {
    enhanced += ", طعام, طبق فاخر, طاولة أنيقة";
  }

  return enhanced;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();
    const { prompt, template, size, style } = body;

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "الرجاء إدخال وصف للصورة" },
        { status: 400 }
      );
    }

    if (isContentBlocked(prompt)) {
      return NextResponse.json(
        {
          error: "عذراً، لا يمكن إنشاء صور تحتوي على هذا النوع من المحتوى",
        },
        { status: 403 }
      );
    }

    const enhancedPrompt = enhanceArabicPrompt(prompt, style, template);

    const sizeMap = {
      square: { width: 1080, height: 1080 },
      story: { width: 1080, height: 1920 },
      ad: { width: 1200, height: 628 },
    };

    const dimensions = sizeMap[size];

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const imageUrl = `https://source.unsplash.com/${dimensions.width}x${dimensions.height}/?arabic,${encodeURIComponent(
      enhancedPrompt.slice(0, 50)
    )}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      dimensions,
      style,
      template,
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الصورة" },
      { status: 500 }
    );
  }
}
