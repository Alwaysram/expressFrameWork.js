const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
  });
  
  // Form submission route handler
  app.get('/success', (req, res) => {
    // Process the form data here
  
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
  });
  

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(4000);