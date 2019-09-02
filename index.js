var express = require('express')
var app = express()

const PORT = process.env.PORT || 8080;
console.log(PORT);

// respond with "hello world" when a GET request is made to the homepage
app.post('/webhook', function (req, res) {
  console.clear();
  console.log(req)
  res.send('Hello webhook')
});

app.get('/home', function (req, res) {
  console.log(req);
  res.send('Welcome to HOme')
})

app.listen(PORT,() => { console.log(PORT) });