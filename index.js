const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/set-cookie", (req, res) => {
  const token = "my token";
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
