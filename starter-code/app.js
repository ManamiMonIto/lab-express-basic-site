const express = require("express");
const app = express();
app.use(express.static("public"));

// our first Route:
app.get('/', (request, response, next) => {
  response.send(`<h1>Welcome to my website!</h1><a href="/about">About</a></br><a href="/gallery">Gallery</a>`);});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// galley route:
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);


