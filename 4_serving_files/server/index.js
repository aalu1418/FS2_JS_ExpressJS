const express = require("express");
const path = require("path");
var app = express();
var bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json

try {
  app.get("/", (req, res) => {
    send_webpage(res, "index");
  });

  app.post('/query/message', function (req, res) {
    // console.log(req.body.name);
    let res_str = "";
    if (req.body.name != "Aaron") {
      res_str = "Hello, "+req.body.name+". You are not the original creator."
    }
    else {
      res_str = "Hello, creator."
    }
    res.send({response: res_str})
  })

  //https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js
  app.get("/:id", function(req, res) {
    send_webpage(res, req.params.id);
    // res.sendFile(req.params.id);
  });

  app.listen(port, () => console.log(`[success] Ok on port ${port}`));
} catch (e) {
  console.log("[failed] " + e);
} finally {
}

const send_webpage = (res, pagename) => {
  res.sendFile(path.join(__dirname, "../client", pagename + ".html"));
};
