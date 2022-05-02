"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("./utils/required"),
    isRequired = _require.isRequired;

var _require2 = require("./core"),
    balance = _require2.balance,
    positions = _require2.positions,
    transactions = _require2.transactions;

var cj = require('color-json');

exports.cli = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var address,
      data,
      _args = arguments;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          address = _args.length > 0 && _args[0] !== undefined ? _args[0] : isRequired("address");
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
          console.log(cj(data));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));