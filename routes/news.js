var express = require("express");
var router = express.Router();
var staticText = require("../copy/staticText.json");
var calendarConfig = require("../copy/calendarConfig.json");

/* GET news page. */
router.get("/", function (req, res, next) {
  res.render("news", {
    fs: require("fs"),
    ...staticText.news,
  });
});

module.exports = router;
