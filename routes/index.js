
var express = require('express');
var router = express.Router();

// const returnjson = require("../controllers/akunController.js");
// const { absen } = require("../controllers/absenController.js");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Semri Dashboard Monitoring KTKI' });
});

// use controller
// router.get('/akun', returnjson); // /akun menggunakan controller return json
// router.post('/absen', absen);



module.exports = router;
