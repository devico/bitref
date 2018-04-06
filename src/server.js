const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, '../public')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})



app.listen(3000, () => {
  console.log('server start on port 3000')
})