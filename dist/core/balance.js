"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("ethers"),
    ethers = _require.ethers;

var _require2 = require("../utils/required"),
    isRequired = _require2.isRequired;
/**
 * @description For a given Address, this function will return the Balance 
 * @param {string} address 
 * @returns balance
 */


exports.balance = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var address,
      provider,
      balance,
      _args = arguments;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          address = _args.length > 0 && _args[0] !== undefined ? _args[0] : isRequired("address");
          provider = new ethers.providers.EtherscanProvider("homestead", process.env.ETHERSCAN_API_KEY);
          _context.next = 4;
          return provider.getBalance(address);

        case 4:
          balance = _context.sent;
          return _context.abrupt("return", ethers.utils.formatEther(balance));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));