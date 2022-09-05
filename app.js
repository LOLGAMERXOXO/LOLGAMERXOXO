var express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view eng roblox follow

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
roblox 300000k follower
