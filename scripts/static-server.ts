import express from "express";
import path from "path";

/*
 * Basic static file server
 *
 * Flags:
 *
 * --port <port_to_serve_on>
 */

const app = express();
const portIndex = process.argv.indexOf("--port");
const port = process.argv[portIndex + 1] || "8080";

app.use(express.static(path.join(__dirname, "../site")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../site/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
