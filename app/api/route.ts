import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "slvn.contact.form@gmail.com",
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "slvn.contact.form@gmail.com",
        to: "slvn.events@gmail.com",
        subject: "Nieuw Contact Formulier Bericht",
        text: `Name: ${body.name}\nEmail: ${body.email}\n\nProduct: ${body.product}\n\n Message: ${body.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "Form submitted" });
    } catch (error) {
        console.log(error);
        return Response.error();
    }
}
