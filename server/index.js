// console.log("Implement servermu disini yak 😝!");

const http = require("http");
const url = require("url");
const { PORT = 8000 } = process.env;

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

function renderHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "utf-8");
}

// request handler
function onRequest(req, res) {
  let url_parts = req.url ? url.parse(req.url, true) : null;
  let pathname = url_parts.pathname;

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(renderHTML("index.html"));
  } else if (pathname === "/cars") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(renderHTML("find_cars.html"));
  } else {
    const filePath = path.join(PUBLIC_DIRECTORY, req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(renderHTML("404.html"));
        return;
      }
      res.end(data);
      res.end();
    });
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
