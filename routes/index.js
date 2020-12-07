var express = require("express");
var router = express.Router();
var staticText = require("../copy/staticText.json");
var calendarConfig = require("../copy/calendarConfig.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    fs: require("fs"),
    ...calendarConfig,
    ...staticText.home,
  });
});

module.exports = router;
