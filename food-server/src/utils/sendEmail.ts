import nodemailer from "nodemailer";

export const sendEmail = async (email: string, subject: string) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: "Hello world?",
    html: generateTemplate(email),
  });
};

const generateTemplate = (name: string) => {
  return `<div>
  <h1>Hello${name}</h1>
  <h1>Welcome to food delivery platform</h1>
  <a href="http://www.google.com">Verify Account</a>
  </div>`;
};
