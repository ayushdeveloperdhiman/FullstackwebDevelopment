const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Set Ejs as template engine
app.set("view engine", "ejs");

// Static folder for serving files
app.use(express.static("uploads"));

// config multer
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB file size limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mineType = fileTypes.test(file.mimetype);
    if (extName && mineType) {
      cb(null, true);
    } else {
      cb("Error: Only images are allowed");
    }
  },
}).single("file");

// Routes

app.get("/", (req, res) => {
  res.render("index", { message: null, file: null });
});

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { message: err, file: null });
    } else {
      if (!req.file) {
        res.render("index", {
          message: "No file Selected!",
          file: null,
        });
      } else {
        res.render("index", {
          message: "File Uploaded Successfully!",
          //   file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});
const port = 8000;
app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
