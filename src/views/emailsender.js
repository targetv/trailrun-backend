const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const dotenv = require("dotenv").config;
const emailSender = async (recieverEmail, subject, templatehtml, props) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sean@activelifecoxhoe.co.uk",
      pass: process.env.EMAILPASSWORD,
    },
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        layoutsDir: path.resolve("./src/views/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/views/"),
    })
  );

  let info = await transporter.sendMail({
    from: "sean@activelifecoxhoe.co.uk",
    to: recieverEmail,
    subject: subject,
    template: templatehtml,
  });
};

module.exports = {
  emailSender,
};
