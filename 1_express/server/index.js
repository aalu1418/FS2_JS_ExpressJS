const express = require("express");
const appServer = express();
const port = 3000;

try {
  appServer.get("/", (req, res) => res.send("Hello World! (from port "+port+")"));

  appServer.listen(port, () => console.log(`[success] Ok on port ${port}`));
} catch (e) {
  console.log("[failed] " + e);
} finally {
}
