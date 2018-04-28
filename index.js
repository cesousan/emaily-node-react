const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// nothing to return from passport file so we
// just require it without assigning to a const
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);


// constructs the server
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
// imports the exported function and pass
// it the app as an argument
require('./routes/auth-routes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
