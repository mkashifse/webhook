var express = require('express')
var app = express()

const PORT = process.env.PORT || 1996;

// respond with "hello world" when a GET request is made to the homepage
app.post('/home', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, () => { console.log(PORT) });