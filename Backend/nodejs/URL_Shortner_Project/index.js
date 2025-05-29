const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const urlRoute = require("./routers/urlRoute");
const authRoute = require("./routers/authRoute");
const app = express();

app.set("view engine", "ejs");
mongoose
  .connect("mongodb://localhost:27017/urlshortener")
  .then(() => {
    console.log("Connected to the MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:27017", // adjust if different
    credentials: true, // this allows cookies across domains
  })
);
app.use("/api", urlRoute);
app.use("/auth", authRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api`);
});
