import { mail } from "config";
import { type SendMailOptions, createTransport } from "nodemailer";

export async function sendMail(
  email: string,
  title: string,
  body: string
): Promise<string> {
  if (mail.address === "" || mail.password === "") {
    return "Correo enviado";
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: mail.address,
      pass: mail.password
    }
  });

  const mailOptions: SendMailOptions = {
    from: mail.address,
    to: email,
    subject: title,
    html: body
  };

  await transporter.sendMail(mailOptions);

  return "Correo enviado";
}
