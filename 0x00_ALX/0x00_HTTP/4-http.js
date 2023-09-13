const http = require("http");

const host = "127.0.0.1";
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Holberton School!");
});

app.listen(port, host, () => {
  console.log(`Server started at port ${port}`);
});
