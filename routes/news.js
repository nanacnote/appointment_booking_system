var express = require("express");
var router = express.Router();
var staticText = require("../copy/staticText.json");
var newsFeed = require("../copy/newsFeed.json");

/* GET news page. */
router.get("/", function (req, res, next) {
  res.render("news", {
    fs: require("fs"),
    ...newsFeed,
    ...staticText.news,
  });
});

module.exports = router;
