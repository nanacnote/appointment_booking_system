var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  if (req.query.formId === "register") {
    setTimeout(() => {
      console.log(req.body);
      res.send(req.body);
    }, 1000);
  }
});

module.exports = router;
