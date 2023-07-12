const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("/build"));

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    res.json({ success: true });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }
});

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  res.json({ success: true, message: "Signup successful" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
