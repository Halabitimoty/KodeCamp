const http = require("http");
const readfile = require("./3-read_file_async");

const host = "127.0.0.1";
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    if (process.argv[2] !== undefined) {
      readfile(process.argv[2])
        .then((data) => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Error");
  }
});

app.listen(port, host, () => {
  console.log(`Server started at port ${port}`);
});
