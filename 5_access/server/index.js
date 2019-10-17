const express = require("express");
const path = require("path");
var app = express();
var bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json()); // for parsing application/jsons

try {
  app.get("/", (req, res) => {
    send_webpage(res, "index");
  });

  //https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js
  app.get("/:id", function(req, res) {
    // console.log(req.params.id);
    if (req.params.id != "aaron") {
      send_webpage(res, "access_denied");
    } else {
      app.use(
        "/" + req.params.id + "/secured",
        express.static("../client/secured")
      );
      res.redirect("/" + req.params.id + "/secured/access_granted.html")
    }
    // res.sendFile(req.params.id);
  });

  app.get("/:usrnm/secured/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/secured", req.params.id));
  });

  app.use((req, res, next) => {
    res.status(404).send("File Not Found");
  });

  app.listen(port, () => console.log(`[success] Ok on port ${port}`));
} catch (e) {
  console.log("[failed] " + e);
} finally {
}

const send_webpage = (res, filename) => {
  res.sendFile(path.join(__dirname, "../client/unsecured", filename + ".html"));
};
