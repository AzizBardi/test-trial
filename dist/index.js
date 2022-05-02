"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('commander'),
    program = _require.program;

var _require2 = require('./server'),
    startServer = _require2.startServer;

var open = require('open');

var _require3 = require("./cli"),
    cli = _require3.cli;

require('dotenv').config();

program.version(require('../package.json').version).usage('[options]').option('-m, --mode [mode]', 'the specific mode ["server/cli"]', "cli").option('-w, --wallet [wallet]', 'the specific wallet').option('-p, --port [port]', 'port to serve on [3000]', Number, process.env.port).option('-h, --host [host]', 'hostname or IP your machine can be accessed at [' + process.env.host + ']', process.env.host).parse(process.argv);
(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var options;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = program.opts();

          if (options.mode.toLowerCase() == "server") {
            startServer(options["port"]);
            open("http://".concat(options["host"], ":").concat(options["port"], "/address/").concat(options.wallet ? options.wallet : ""));
          } else cli(options.wallet);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();