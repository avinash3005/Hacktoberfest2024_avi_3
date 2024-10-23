// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // Update with your React frontend URL
    // origin: "https://grapher-shot.vercel.app", // Update with your React frontend URL
  })
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/test", (req, res) => {
  res.send("Server is running");
});

app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  const mailOptions = {
  
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: "More prices",
    text: `You have a new subscriber: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send(`Email sending failed: ${error.message}`);
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
