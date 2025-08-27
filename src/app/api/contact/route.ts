import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validation/contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { fullName, email, phone, subject, message } = parsed.data;

    // Log environment variables (without exposing the password)
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      emailUser: process.env.EMAIL_USER,
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { message: 'Email service is not configured.' },
        { status: 500 },
      );
    }

    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    const text = `New contact form submission\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`;

    console.log('Sending email...');
    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject} — ${fullName}`,
      text,
    });

    console.log('Email sent successfully:', result.messageId);
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    const err = error as Error;
    console.error('Detailed error:', {
      message: err.message,
      stack: err.stack,
      name: err.name,
    });
    return NextResponse.json(
      {
        message: 'Failed to send message',
        error: err?.message ?? 'Unknown error',
      },
      { status: 500 },
    );
  }
}
