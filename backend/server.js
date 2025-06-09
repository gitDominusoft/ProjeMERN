// import i librarive
// express - framework i nodejs
const express = require("express");

const app = express();

// Testimi
app.use("/", (req, res) => {
  res.send("Hello React");
});

// Krijimi i server
app.listen(5000, () => {
  console.log("Server created");
});
