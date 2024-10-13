import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import 'dotenv/config'

//,membuat server
const app = express()
const port = 3000

//menangani middleware
app.use(cors())
app.use(express.json())

app.post("/sendEmail", async (req, res)=>{
  const {userEmail, subject, messages} = req.body

//auth buat penerima emai
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASS,
    },
  });

//data request / user
  const mailOptions = {
    from:userEmail,
    to:process.env.EMAIL_USER,
    replyTo:userEmail,
    subject:subject,
    text: messages,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.toString() });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})