'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _pole = require('./controllers/pole');

var _pole2 = _interopRequireDefault(_pole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/', function (req, res, next) {
  next();
});

var api = function () {
  return (0, _express.Router)().get('/poles', _pole2.default.get_poles).get('/pole', _pole2.default.get_pole);
}();

router.use('/api', api);

exports.default = router;