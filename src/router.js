import express from "express";
import nodemailer from 'nodemailer'

const router = express.Router();

router.post("/email", async (req, res) => {
  const myEmail = process.env.MY_EMAIL;

  const { firstName, lastName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASSWORD,
    },
  });
  
  try {
    await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${process.env.TRANSPORTER_EMAIL}>`,
        to: myEmail,
        subject: `${subject}`,
        text: `${message}`,
        html: `${message} \n\n <p>${firstName} ${lastName}'s email address: ${email}</p>`,
      })
    res.json({ message: "Message sent!" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Could not send the email!" });
  }

});

export default router;
