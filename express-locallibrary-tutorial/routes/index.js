var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

let i = 0;

let loggedIn = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  i++;
  req.app.locals.ii++;
  ii++;
  res.render('dane', {
    localVar: i,
    globalVar1: ii,
    globalVar2: req.app.locals.ii
  });
});

router.get('/:name/:age', (req, res, next) => {
  res.send(`name: ${req.params.name}, age: ${req.params.age}`);
})

router.get('/login-form', (req, res, next) => {
  res.render('sign-in-form', { 
    error: false,
    loggedIn
   });
})

router.post('/login', function (req, res, next) {
  const username = req.body.username;
      let loginResult = login(username, req.body.password);
  if (loginResult) {
          loggedIn = true;
          res.render('users', {username: username, loggedIn});
      }
      else {
          loggedIn = false;
          res.render('sign-in-form', {error: true, loggedIn});
      }
  });

router.get('/logout', (req, res, next) => {
  loggedIn = false;
  res.render('sign-in-form', { 
    error: false,
    loggedIn
   });
})


module.exports = router;
