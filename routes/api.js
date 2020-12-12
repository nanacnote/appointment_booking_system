var express = require("express");
var router = express.Router();
var emailText = require("../copy/emailText.json");
var sendEmail = require("../utils/sendEmail");
var writeToFile = require("../utils/writeToFile");
var userAuth = require("../utils/userAuth");

router.post("/", async function (req, res, next) {
  // processes registration form by saving info to file system
  if (req.query.formId === "register") {
    setTimeout(() => {
      writeToFile(req.body);
      res.status(200).send(req.body);
    }, 1000);
  }

  // process bookings form by sending email confirmation to user
  if (req.query.formId === "book") {
    console.log(req.body);
    setTimeout(() => {
      sendEmail({
        email: req.body.bookingsEmail,
        subject: emailText.subject,
        message: `${emailText.message1} ${req.body.timeSlot}. ${emailText.message2}`,
      });
      res.status(200).send(req.body);
    }, 1000);
  }

  // process login form by checking user credentials
  if (req.query.formId === "login") {
    var isValidUser = await userAuth({
      email: req.body.email,
      password: req.body.password,
    });

    if (isValidUser) {
      res.status(200).send(req.body);
    } else {
      res.status(404).end();
    }
  }
});

module.exports = router;
