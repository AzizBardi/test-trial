"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require('express');

var chalkRainbow = require('chalk-rainbow');

var _require = require("./utils/required"),
    isRequired = _require.isRequired;

var expressListRoutes = require('express-list-routes');

var _require2 = require("./core"),
    balance = _require2.balance,
    positions = _require2.positions,
    transactions = _require2.transactions;
/**
 * @param {express_app} app 
 */


var configureAllRoutes = exports.configureAllRoutes = function (app) {
  app.get('/', function (req, res) {
    res.send("");
  });
  app.get('/address/:address', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
      var address, data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              address = req.params.address;
              data = {};
              _context.next = 4;
              return balance(address);

            case 4:
              data.balance = _context.sent;
              _context.next = 7;
              return transactions(address);

            case 7:
              data.transactions = _context.sent;
              _context.next = 10;
              return positions(address);

            case 10:
              data.positions = _context.sent;
              res.send(data);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
/**
 * 
 * @param {int} port 
 */


exports.startServer = function () {
  var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isRequired("port");
  var app = express();
  configureAllRoutes(app);
  app.listen(port, function () {
    console.log(chalkRainbow("We are listening on port ".concat(port)));
    expressListRoutes(app, {
      prefix: './'
    });
  });
};