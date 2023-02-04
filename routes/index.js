var express = require('express');
var router = express.Router();

const returnjson = require("../controllers/akunController.js");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express Regenarator' });
});

router.get('/akun', returnjson);


module.exports = router;
