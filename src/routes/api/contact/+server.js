// src/routes/api/contact/+server.js
import nodemailer from 'nodemailer';

export async function POST({ request }) {
    const { name, email, message } = await request.json();

    // Configure the SMTP transporter.
    // Replace these values with your SMTP server details.
    let transporter = nodemailer.createTransport({
        host: "smtp.example.com", // e.g., smtp.gmail.com
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER, // your email address
            pass: process.env.SMTP_PASS  // your email password or app-specific password
        }
    });

    try {
        await transporter.sendMail({
            from: email, // or you could force the sender to always be your email address
            to: process.env.MY_EMAIL, // your email address to receive the message
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p>${message}</p>`
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
