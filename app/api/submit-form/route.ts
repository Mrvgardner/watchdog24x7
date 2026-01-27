import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    console.log('Form data received:', formData);
    console.log('API Key exists:', !!process.env.FILLOUT_API_KEY);

    // Submit to Fillout API
    const response = await fetch('https://api.fillout.com/v1/api/forms/a9PMrjCG6eus/submissions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.FILLOUT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submissions: [
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            terminals: formData.terminals,
            message: formData.message,
            agreedToTerms: formData.agreedToTerms,
          }
        ]
      }),
    });

    const responseData = await response.json().catch(() => ({}));
    
    console.log('Fillout API response status:', response.status);
    console.log('Fillout API response:', responseData);

    if (response.ok) {
      return NextResponse.json({ success: true, data: responseData });
    } else {
      console.error('Fillout API error:', response.status, responseData);
      return NextResponse.json(
        { success: false, error: responseData.message || 'Failed to submit form' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
