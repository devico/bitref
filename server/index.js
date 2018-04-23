const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

import {generateShortUrl} from '../common/helpers'

const app = express();

let links = {}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use("/", express.static(path.join(__dirname, "../public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/api/links", (req, res) => {
  axios.get(req.query.link)
  .then(res => {
    return res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1]
  })
  .then(title => {
    const shortLink = generateShortUrl()
    links[shortLink] = [req.query.link, title]
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.json(links[shortLink])
  })
  .catch((error, next) => {
    next(error)
  })
})

app.get("/api/links", (req, res) => {
  res.status(200).json(links)
})

app.get("/api/links/:shortLink", (req, res) => {
  res.status(200).json(links[req.params.shortLink])
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("server start on port 3000");
})
