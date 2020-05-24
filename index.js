const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/login", express.static(__dirname + "/public"));

app.get("/login", (req, res) => {
  res.send("Hello,My application");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  //db process
  res.redirect("/");
});
app.listen(3000, () => console.log("server is running at port 3000..."));
