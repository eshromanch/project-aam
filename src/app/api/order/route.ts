// src/app/api/order/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Forward to Google Apps Script
  const response = await fetch('https://script.google.com/macros/s/AKfycbxhEBJnvEOEBl_c2KV_D1lePgKUkHk1bPrMEtEahALZBfiL1371jwQjO4Y3cMbfBQytZw/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  console.log(result);
  return NextResponse.json({ result });
}