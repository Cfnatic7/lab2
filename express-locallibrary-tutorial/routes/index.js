var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    method: 'GET',
    userAgentIp: req.ip,
    serverAddress: req.hostname,
    accept: req.get('accept')
  });
});

router.get('/:name/:age', (req, res, next) => {
  res.send(`name: ${req.params.name}, age: ${req.params.age}`);
})

module.exports = router;
