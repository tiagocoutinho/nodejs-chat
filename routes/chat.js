var fs = require('fs');
var express = require('express');
var router = express.Router();

var messages = [];

/* write a new message */
router.post('/', function(req, res, next) {
  console.log('received message:' + req.body.message + '; nick:' + req.body.nickname);
  res.setHeader('Content-type', 'text/plain');
  if (req.body.message && req.body.nickname) {
    messages.push({
      nickname: req.body.nickname,
      message: req.body.message,
    });
    res.end('ok');
  }
});

router.get('/', function(req, res, next) {
  console.log('sending chat content...');
  res.setHeader('Content-type', 'text/json');
  res.end(JSON.stringify(messages));
});

module.exports = router;
