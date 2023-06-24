const fs = require("fs");

function callback(err, data) {
  console.log(data);
}

//!M-1

// fs.readFile("a.txt", "utf-8", callback);

// fs.readFile("a.txt", "utf-8", function callback(err, data) {
//   console.log(data);
// });

//!M-2

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

//!M-3
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
