'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.use('/', function (req, res, next) {
  next();
});

router.get('/hello', function (req, res) {
  res.json({
    msg: 'hello world'
  });
});

exports.default = router;