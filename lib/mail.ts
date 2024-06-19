import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL ;

export const sendTwoFactorTokenEmail = async (
    email: string, 
    token: string
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "2FA Code",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #dddddd; border-radius: 5px;">
                <h2 style="text-align: center; color: #2196F3;">Your 2FA Code</h2>
                <p style="font-size: 16px; text-align: center; color: #333333;">Use the following code to complete your sign-in process:</p>
                <p style="font-size: 24px; font-weight: bold; text-align: center; color: #2196F3; border: 2px dashed #2196F3; padding: 10px; display: inline-block;">${token}</p>
                <p style="font-size: 14px; text-align: center; color: #777777;">If you did not request this code, please ignore this email.</p>
            </div>
        `
    });
};

export const sendPasswordResetEmail = async (
    email: string, token: string
) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #dddddd; border-radius: 5px;">
                <h2 style="text-align: center; color: #2196F3;">Reset Your Password</h2>
                <p style="font-size: 16px; text-align: center; color: #333333;">Click the button below to reset your password:</p>
                <p style="text-align: center; margin: 20px;">
                    <a href="${resetLink}" style="font-size: 18px; font-weight: bold; color: white; background-color: #2196F3; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
                </p>
                <p style="font-size: 14px; text-align: center; color: #777777;">If you did not request a password reset, please ignore this email.</p>
            </div>
        `
    });
};

export const sendVerificationEmail = async (
    email: string, token: string
) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #dddddd; border-radius: 5px;">
                <h2 style="text-align: center; color: #2196F3;">Confirm Your Email</h2>
                <p style="font-size: 16px; text-align: center; color: #333333;">Click the button below to confirm your email address:</p>
                <p style="text-align: center; margin: 20px;">
                    <a href="${confirmLink}" style="font-size: 18px; font-weight: bold; color: white; background-color: #2196F3; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Confirm Email</a>
                </p>
                <p style="font-size: 14px; text-align: center; color: #777777;">If you did not create an account with us, please ignore this email.</p>
            </div>
        `
    });
};