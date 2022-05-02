"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("ethers"),
    ethers = _require.ethers;

var isRequired = require("../utils/required");

var axios = require('axios').default;

require('dotenv').config();
/**
 * 
 * @param {String} address 
 * @returns 
 * @description For a given Wallet Adress this Function will return the transactions
 */


exports.transactions = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var address,
      response,
      _args = arguments;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          address = _args.length > 0 && _args[0] !== undefined ? _args[0] : isRequired("address");
          _context.prev = 1;
          _context.next = 4;
          return axios.get("https://api.covalenthq.com/v1/1/address/".concat(address, "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=").concat(process.env.COVALENTHQ_API_KEY));

        case 4:
          response = _context.sent;

          if (!Object.prototype.hasOwnProperty.call(response.data, "data")) {
            _context.next = 10;
            break;
          }

          response.data.data.items.map(function (e) {
            e.value_eth = ethers.utils.formatEther(e.value);
            return e;
          });
          return _context.abrupt("return", response.data.data.items);

        case 10:
          throw "Error data parsing";

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0.toString());
          throw _context.t0;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 13]]);
}));