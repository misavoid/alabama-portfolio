import nodemailer from 'nodemailer';
import {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    RECEIVER_EMAIL
} from '$env/static/private';

export async function POST({ request }) {
    const { name, email, message } = await request.json();

    // Check if all fields have values
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({ success: false, error: 'All fields are required.' }),
            { status: 400 }
        );
    }

    // Log the RECEIVER_EMAIL for debugging purposes (remove in production)
    console.log("RECEIVER_EMAIL:", RECEIVER_EMAIL);

    // Set up the transporter with your iCloud SMTP details
    let transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === "true", // will be true here
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });


    // Prepare the email content
    let mailOptions = {
        // The 'from' address must be your verified iCloud email (from SMTP_USER)
        from: `"Portfolio Contact Form" <${SMTP_USER}>`,
        // The 'to' address is where you want to receive the notification
        to: RECEIVER_EMAIL,
        // Use 'replyTo' to include the visitor's email so that when you reply,
        // it goes to the visitor's email address
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `You received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        // Attempt to send the email
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
        return new Response(
            JSON.stringify({ success: true, message: 'Message sent successfully!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ success: false, error: 'Error sending email' }),
            { status: 500 }
        );
    }
}
