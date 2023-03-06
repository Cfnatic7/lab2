var express = require('express');
var router = express.Router();

let messages = [];

router.get('/', (req, res, next) => {
    if (req.session.loggedIn) {
        res.render('chat', {
            messages,
            username: req.session.username
        })
    }
    else {
        res.send('not logged in')
    }
})

router.post('/', (req, res, next) => {
    if (req.session.loggedIn) {
        console.log(req.body.message);
        messages.push(req.session.username + ': ' + req.body.message);
        res.render('chat', {
            messages,
            username: req.session.username
        })
    }
    else {
        throw new Error('Not logged in');
    }
})

module.exports = router;