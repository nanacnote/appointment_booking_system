var express = require("express");
var router = express.Router();
var staticText = require("../copy/staticText.json");
var calendarConfig = require("../copy/calendarConfig.json");

/* GET team page. */
router.get("/", function (req, res, next) {
  res.render("team", {
    fs: require("fs"),
    ...staticText.team,
  });
});

module.exports = router;
