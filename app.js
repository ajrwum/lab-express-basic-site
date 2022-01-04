// loading libraries
const exp = require('express');
const hbs = require('hbs');

// some inits
const PORT = 4000;
const CSS_RESET = 'reset.css';
const CSS_GEN = 'style.css';
const CSS_HOME = 'home.css';
const CSS_ABOUT = 'about.css';
const CSS_WORKS = 'works.css';
const CSS_GALLERY = 'gallery.css';
const works = require('./data/works');
const appearances = require('./data/gallery');

// starting the server, aka the express app
const app = exp();

// setting the default view engine as hbs, our templating engine
app.set('view engine', 'hbs');
// pointing the public folder for static resources
app.use(exp.static(__dirname + '/public'));

// defining the path to partials for hbs
hbs.registerPartials(__dirname + '/views/partials');


// creating the routes
// - home
app.get('/', (req, res, next) => {
  res.render('home', {
    css: [CSS_RESET, CSS_GEN, CSS_HOME]
  });
});
// - about
app.get('/about', (req, res, next) => {
  res.render('about', {
    css: [CSS_RESET, CSS_GEN, CSS_ABOUT]
  })
});
// - works
app.get('/works', (req, res, next) => {
  res.render('works', {
    css: [CSS_RESET, CSS_GEN, CSS_WORKS],
    works
  });
});
// - gallery
app.get('/gallery', (req, res, next) => {
  res.render('gallery', {
    css: [CSS_RESET, CSS_GEN, CSS_GALLERY],
    appearances
  });
});


// listening to the server port
app.listen(PORT, () => {
  console.log(`Express app server now listening on port: ${PORT}`);
});
