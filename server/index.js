const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.use("/", express.static(path.join(__dirname, "../public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/getlink", cors(), (req, res) => {

  let title = axios.get(req.query.link)
    .then(res => {
      res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1];
    })
    .catch(error => {
      console.error(error);
    })
  res.send(title)
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("server start on port 3000");
})
