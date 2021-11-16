const router = require('express').Router();
var connection = require('../config/db/db');
const upload = require('../app/middleware/multer');
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM food', function(err, rows) {
        if (!err) {
            res.render('upload', { rows, layout: 'index' });
        }
    })
});

router.post("/", upload.single("image"), (req, res) => {

})

module.exports = router;








// var express = require('express');
// var router = express.Router();
// var connection = require('../lib/db');
// const bodyParser = require('body-parser')

// const multer = require('multer')
// const store = require('../middleware/multer');




// router.post('/', store.single('sampleFile'), function(req, res, err) {
//     if (err) {
//         console.log(err);
//     }
// });
// // router.post('/', function(req, res, next) {
// //     let sampleFile;
// //     let uploadPath;

// //     if (!req.files || Object.keys(req.files).length === 0) {
// //         return res.status(400).send('No files were uploaded.');
// //     }

// //     // name of the input is sampleFile
// //     sampleFile = req.files.sampleFile;
// //     uploadPath = __dirname + './upload/' + sampleFile.name;

// //     sampleFile.mv(uploadPath, function(err) {
// //         connection.query('')
// //     });

// // });


// module.exports = router;