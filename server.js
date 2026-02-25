const express = require("express");
const session = require("express-session");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("GitHub OAuth Demo (scaffold)");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));