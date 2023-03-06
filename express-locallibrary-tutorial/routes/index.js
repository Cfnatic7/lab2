var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

let i = 0;

router.get('/d', function(req, res, next) {
  i++;
  req.app.locals.ii++;
  ii++;
  req.session.views = (req.session.views || 0) + 1
  res.render('dane', {
    counter: req.session.views,
    username: req.session.username ? req.session.username : '',
    loggedIn: req.session.loggedIn ? true : false,
    localVar: i,
    globalVar1: ii,
    globalVar2: req.app.locals.ii
  });
});

router.get('/', function(req, res, next) {
  i++;
  req.app.locals.ii++;
  ii++;
  req.session.views = (req.session.views || 0) + 1
  res.render('index', {
    counter: req.session.views,
    username: req.session.username ? req.session.username : '',
    loggedIn: req.session.loggedIn ? true : false,
    localVar: i,
    globalVar1: ii,
    globalVar2: req.app.locals.ii
  });
});

router.get('/:name/:age', (req, res, next) => {
  res.send(`name: ${req.params.name}, age: ${req.params.age}`);
})

router.get('/login', (req, res, next) => {
  req.session.loggedIn = (req.session.loggedIn || false);
  res.render('sign-in-form', { 
    error: false,
    loggedIn: req.session.loggedIn
   });
})

router.post('/login', function (req, res, next) {
  const username = req.body.username;
      let loginResult = login(username, req.body.password);
  if (loginResult) {
          req.session.username = username;
          req.session.loggedIn = true;
          res.render('users', {
            username: username, 
            loggedIn: req.session.loggedIn
          });
      }
      else {
          req.session.loggedIn = false;
          res.render('sign-in-form', {
            error: true, 
            loggedIn: req.session.loggedIn
          });
      }
  });

router.get('/logout', (req, res, next) => {
  req.session.loggedIn = false;
  req.session.username = null;
  res.render('sign-in-form', { 
    error: false,
    loggedIn: req.session.loggedIn
   });
})


module.exports = router;
