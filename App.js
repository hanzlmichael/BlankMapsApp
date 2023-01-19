const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express()

// view engine 
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// databaze
const dbURI = process.env.DB_CONNECT;
/* mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
 */
mongoose.connect(dbURI)
  .then(() => app.listen(3210))
  .catch((err) => console.log(err))
// routes

const tests = {tests: [{title: "Slepá mapa USA A"}, {title: "Slepá mapa USA B"}]}

const author = {
  name : 'Geeksforgeeks',
  skills: ['DSA', 'Interview Experience', 'Web Developement', 'Puzzels',]
}

app.get('*', checkUser);
app.get('/', (req, res) => res.render('index'));
//app.get('/tests', requireAuth, (req, res) => res.render('tests', {tests}));
app.use(testRoutes);
app.use(authRoutes);
//app.use(testRoutes)