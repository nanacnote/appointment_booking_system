var nodemailer = require("nodemailer");

/**
 * handles sending email confirmation after bookings
 *
 * @param {object} param param={email, subject, body}
 */
function sendEmail({ email, subject, message }) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "appointment.covid.uea@gmail.com",
      pass: "CMP-4011A",
    },
  });

  var mailOptions = {
    from: "appointment.covid.uea@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendEmail;
