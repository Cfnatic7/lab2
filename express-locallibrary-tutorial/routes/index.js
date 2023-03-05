var express = require('express');
var router = express.Router();
let i = 0;

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

module.exports = router;
