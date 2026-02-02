import { NextRequest, NextResponse } from "next/server";

interface CreditsRequest {
  userId: string;
  amount: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreditsRequest = await request.json();
    const { userId, amount } = body;

    if (!userId || !amount || amount <= 0) {
      return NextResponse.json(
        { error: "بيانات غير صحيحة" },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const packPrices: Record<number, number> = {
      50: 49,
      150: 129,
      500: 349,
    };

    const price = packPrices[amount] || 0;

    return NextResponse.json({
      success: true,
      newCredits: amount,
      price: price,
      currency: "ر.س",
      transactionId: "txn_" + Date.now(),
    });
  } catch (error) {
    console.error("Credits error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء عملية الشراء" },
      { status: 500 }
    );
  }
}
