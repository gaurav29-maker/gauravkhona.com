import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // TODO: Connect this to a Database (Postgres/MongoDB) or Google Sheets
        console.log('--- QUIZ SUBMISSION RECEIVED ---');
        console.log('Answers:', data.answers);
        console.log('Timestamp:', new Date().toISOString());
        console.log('--------------------------------');

        // DEV ONLY: Save to local file for demonstration
        if (process.env.NODE_ENV !== 'production') {
            const filePath = path.join(process.cwd(), 'quiz-submissions.json');
            let submissions = [];
            try {
                if (fs.existsSync(filePath)) {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    submissions = JSON.parse(fileContent);
                }
            } catch (e) { console.error('Error reading submissions file', e); }

            submissions.push({ ...data, timestamp: new Date().toISOString() });
            fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
        }

        // --- EMAIL NOTIFICATION ---
        // Sends email to gauravkhona29@gmail.com
        try {
            // Check if credentials exist
            if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASS,
                    },
                });

                const mailOptions = {
                    from: process.env.GMAIL_USER,
                    to: 'gauravkhona29@gmail.com', // User's email
                    subject: 'New System Audit Submission',
                    text: `New submission received from Gauravkhona.com\n\nAnswers:\n${JSON.stringify(data.answers, null, 2)}\n\nTimestamp: ${new Date().toLocaleString()}`,
                    html: `
                    <h2>New System Audit Submission</h2>
                    <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                    <table style="border-collapse: collapse; width: 100%;">
                        ${Object.entries(data.answers).map(([key, value]) => `
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${key}</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${String(value)}</td>
                            </tr>
                        `).join('')}
                    </table>
                `
                };

                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            } else {
                console.warn('Skipping email: GMAIL_USER or GMAIL_PASS not found in .env');
            }
        } catch (emailError) {
            console.error('Failed to send email:', emailError);
            // Don't fail the request just because email failed
        }

        // Return success response
        return NextResponse.json({ success: true, message: 'Submission logged' }, { status: 200 });
    } catch (error) {
        console.error('Quiz submission error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
