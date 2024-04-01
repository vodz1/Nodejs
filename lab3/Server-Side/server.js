const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.get(["/", "/welcome.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "../client-side/pages/main.html"));
});
app.get("/welcome.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-side/pages/welcome.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-side/styles/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-side/scripts/script.js"));
});

app.post("/welcome.html", (req, res) => {
  const { name, mobile, address, email } = req.body;



  let userHtml = fs
    .readFileSync("../client-side/pages/welcome.html", "utf-8")
    .replace("{userName}", name)
    .replace("{userMobile}", mobile)
    .replace("{userAddress}", address)
    .replace("{userEmail}", email);
  res.send(userHtml);
});

app.listen(7001, () => {
  console.log("Server running at http://localhost:7001");
});