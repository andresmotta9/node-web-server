require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Serve static content
app.use(express.static('public'));

const params = {
  name: 'andres',
  title: 'Node Course'
}

app.get('/', (req, res) => {
  res.render('home', params);
});

app.get('/generic', (req, res) => {
  res.render('generic', params);
});

app.get('/elements', (req, res) => {
  res.render('elements', params);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})