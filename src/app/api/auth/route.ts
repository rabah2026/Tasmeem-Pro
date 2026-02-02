import { NextRequest, NextResponse } from "next/server";

interface AuthRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AuthRequest = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "الرجاء إدخال بريد إلكتروني صحيح" },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockUser = {
      id: "user_" + Date.now(),
      email,
      credits: 5,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      user: mockUser,
      token: "mock_token_" + Date.now(),
    });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تسجيل الدخول" },
      { status: 500 }
    );
  }
}
