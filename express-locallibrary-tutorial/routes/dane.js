var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    res.send(req.body);
})

router.get('/', (req, res, next) => {
    res.send(req.query);
})


module.exports = router;