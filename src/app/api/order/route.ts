// // src/app/api/order/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   const data = await req.json();

//   // Forward to Google Apps Script
//   const response = await fetch('https://script.google.com/macros/s/AKfycbxhEBJnvEOEBl_c2KV_D1lePgKUkHk1bPrMEtEahALZBfiL1371jwQjO4Y3cMbfBQytZw/exec', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });

//   const result = await response.text();
//   console.log(result);
//   return NextResponse.json({ result });
// }

// src/app/api/order/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Set a timeout for the fetch (e.g., 10 seconds)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxhEBJnvEOEBl_c2KV_D1lePgKUkHk1bPrMEtEahALZBfiL1371jwQjO4Y3cMbfBQytZw/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);

    const result = await response.text();
    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    // Log error for debugging
    console.error('Order API error:', error);
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}