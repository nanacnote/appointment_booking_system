var express = require("express");
var router = express.Router();
var copy = require("../copy.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { fs: require("fs"), ...copy.home });
});

module.exports = router;
