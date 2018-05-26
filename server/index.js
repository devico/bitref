const axios = require('axios')
const bodyParser = require('body-parser')
const config = require('./config')
const cors = require('cors')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const path = require('path')
const querystring = require('querystring')

import {generateShortUrl} from '../common/helpers'

const app = express()

let db
MongoClient.connect(config.DB_URL, (error, connection) => {
  db = connection.db('bitref')
  app.listen(3000, () => {
    console.log("server start on port 3000");
  })
})

// let links = {}

app.use('/', express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/api/addlink', (req, res) => {
  axios.get(req.body.url)
    .then(res => {
      return res.data.match(/<title[^>]*>([^<]+)<\/title>/)[1]
    })
    .then(title => {
      const shortLink = generateShortUrl()
      const sourceLink = req.body.url
      const titleLink = title

      db.collection('links')
        .insertOne({
          sourceLink: sourceLink,
          shortLink: shortLink,
          titleLink: title
        }, () => {
          res.end('Link saved successfully')
        })
    })
    .catch(console.error)
})

app.get('/api/links', (req, res) => {
  db.collection('links').find().toArray().then(links => {
    res.send(links[links.length - 1])
  })
})

/* app.get('/api/links/:shortLink', (req, res) => {
  res.status(200).json(links[req.params.shortLink])
})

db.collection('subscribers').find().toArray().then(subscribers => {
  let html = "<h3>Подписчики</h3><ol>"
  for (let user of subscribers) {
    html = html + "<li>" + user.username + " - " + user.email + "</li>"
  }
  html += "</ol>"
  res.send(html)
})
*/
