import { NextResponse } from 'next/server';
import { CONTACT_INFO } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, serviceNeeded, message, contactMethod } = body;

    // Validate required fields
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full name and phone number are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = 'New Estimate Request - Abboud Electric and HVAC';
    const emailBody = `
New Estimate Request Received

Customer Information:
- Name: ${fullName}
- Phone: ${phone}
- Email: ${email || 'Not provided'}
- Service Needed: ${serviceNeeded || 'Not specified'}
- Preferred Contact Method: ${contactMethod === 'call' ? 'Phone Call' : 'Text Message'}

Message:
${message || 'No additional message'}

---
This request was submitted from the Abboud Electric and HVAC website.
Please contact the customer as soon as possible.
    `.trim();

    // For now, we'll use a simple mailto approach
    // In production, you would integrate with an email service like SendGrid, Resend, or Nodemailer
    console.log('Form submission received:', {
      fullName,
      phone,
      email,
      serviceNeeded,
      contactMethod,
      message,
      sendTo: CONTACT_INFO.email,
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your estimate request has been received. We will contact you shortly!',
      data: {
        emailSubject,
        emailBody,
        recipientEmail: CONTACT_INFO.email,
      }
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
