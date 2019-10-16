var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/router', function (req, res) {
  res.send('Got a GET request')
})

router.post('/router', function (req, res) {
  res.send('Got a POST request')
})

router.put('/router', function (req, res) {
  res.send('Got a PUT request')
})

router.delete('/router', function (req, res) {
  res.send('Got a DELETE request')
})

module.exports = router;
