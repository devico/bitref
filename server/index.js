const express = require("express")
const path = require("path")
const axios = require("axios")
const cors = require("cors")
const bodyParser = require('body-parser')
const querystring = require('querystring')

import {generateShortUrl} from '../common/helpers'

const app = express();

let links = {}

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.use("/", express.static(path.join(__dirname, "../public")))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/api/addlink", (req, res) => {
  axios.get(req.body.url)
    .then(res => {
      return res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1]
    })
    .then(title => {
      const shortLink = generateShortUrl()
      links[shortLink] = [req.body.url, title]
      res.setHeader('Content-Type', 'application/json')
      res.json(links[shortLink])
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("/api/links", (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  // res.send(links)
  res.send(JSON.stringify(links, null, 2))
  //res.send('hello world');
  // res.writeHead(200, {'Content-Type': 'application/json'})
  // res.send('links')
  // res.json(links)
  // res.status(200).json(links)
})

app.get("/api/links/:shortLink", (req, res) => {
  res.status(200).json(links[req.params.shortLink])
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("server start on port 3000");
})
