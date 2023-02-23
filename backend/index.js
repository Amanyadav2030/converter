const express = require("express");

const bodyparser = require("body-parser");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
const upload = multer({ storage: storage });
const app = express();

app.use(express.static("uploads"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
var docxConverter = require("docx-pdf");

app.post("/docxtopdf", upload.single("file"), (req, res) => {
  let outputpath = Date.now() + "output.pdf";
  docxConverter(req.file.path, outputpath, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.download(outputpath,() => {

    })
  });
});
app.listen(5000, () => {
  console.log("App is listening on port 5000");
});