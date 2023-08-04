var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Route for users here now finished add livereload users');
});

module.exports = router;
