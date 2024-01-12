const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //const filePath = path.join(__dirname, "index.html");
    const filePath = path.join(__dirname, "nonexistent-file.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(5001, () => {
  console.log("Server listening on port 5001");
});

// http
//   .createServer((req, res) => {
//     res.write("hello world");
//     res.end();
//   })
//   .listen(5001);
