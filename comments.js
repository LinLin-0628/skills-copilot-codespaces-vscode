// Create web server
// Load the express module
const express = require('express');
const app = express();
// Load the comments module
const comments = require('./comments');
// Load the body-parser module
const bodyParser = require('body-parser');
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Serve the index page
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});
// Create a new comment
app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/');
});
// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});