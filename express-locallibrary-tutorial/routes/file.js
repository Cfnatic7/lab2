var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let file = req.files.file;
            
            file.mv('../uploads/' + file.name);

            res.status(204).send();
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:fileName', (req, res, next) => {
    res.download('../uploads/' + req.params.fileName, (err) => {
        if(err) {
            console.log(err);
        }
    })
})

module.exports = router;