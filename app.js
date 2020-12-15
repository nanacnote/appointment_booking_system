var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var livereload = require("livereload");
var connectLivereload = require("connect-livereload");

var indexRouter = require("./routes/index");
var teamRouter = require("./routes/team");
var newsRouter = require("./routes/news");
var apiRouter = require("./routes/api");

// livereload server
var lrServer = livereload.createServer();
lrServer.watch(__dirname + "/public");
lrServer.server.once("connection", function () {
  setTimeout(() => {
    lrServer.refresh("/");
  }, 100);
});

var app = express();

//environment setup
app.set("env", process.env.NODE_ENV);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup connectLivereload for dev env
app.get("env") === "development" && app.use(connectLivereload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/team", teamRouter);
app.use("/news", newsRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
