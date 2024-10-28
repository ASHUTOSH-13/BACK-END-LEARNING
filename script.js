//const fs = require("fs");
// // fs.writeFile(
// //   "check.txt",
// //   "checking if the module is working fine or not",
// //   function (err) {
// //     if (err) console.error(err);
// //     else console.log("done");
// //   }
// // );

// fs.appendFile("check.txt", " everything working fine", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// //renaming file name

// fs.rename("check.txt", "new_check.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("renaming done");
// });

// // copying the existing file

// fs.copyFile("new_check.txt", "./copy/copy.txt", function (err) {
//   if (err) console.error(err.message);
//   else console.log("copied successfully");
// });

// fs.unlink("check.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("removed successfully");
// });

// fs.rmdir("./copy", { recursive: true }, function (err) {
//   if (err) console.log(err);
//   else console.log("foolder removed successfully");
// });

// fs.readFile("new_check.txt", "utf8", function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// const http = require("http");
// const server = http.createServer(function (req, res) {
//   res.end("checking the server");
// });

// server.listen(3000);

// express part:
// express is an npm package, this is a framework(everything should go in a flow), it manages everything from recieving a request and giving response..
// using express we can create routes, this helps in creating middleware and request and response handling and error handling.
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("middleware worked");
  next();
});
app.get("/", function (req, res) {
  res.send("checking the server");
});

app.get("/profile", function (req, res) {
  res.send("checking the next route using profile");
});

app.listen(3000);
