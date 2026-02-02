import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "المستخدم مطلوب" }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      images: [],
      total: 0,
    });
  } catch (error) {
    console.error("Get images error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء جلب الصور" },
      { status: 500 }
    );
  }
}

interface SaveImageRequest {
  userId: string;
  imageUrl: string;
  prompt: string;
  template?: string;
  size: string;
  style: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SaveImageRequest = await request.json();
    const { userId, imageUrl, prompt, template, size, style } = body;

    if (!userId || !imageUrl || !prompt) {
      return NextResponse.json(
        { error: "البيانات غير مكتملة" },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const savedImage = {
      id: "img_" + Date.now(),
      userId,
      imageUrl,
      prompt,
      template,
      size,
      style,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      image: savedImage,
    });
  } catch (error) {
    console.error("Save image error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء حفظ الصورة" },
      { status: 500 }
    );
  }
}
