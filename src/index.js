const {
    program
} = require('commander');
const {
    startServer
} = require('./server');
const open = require('open');
const {cli} = require("./cli");
require('dotenv').config();

program
    .version(require('../package.json').version)
    .usage('[options]')
    .option('-m, --mode [mode]', 'the specific mode ["server/cli"]',"cli")
    .option('-w, --wallet [wallet]', 'the specific wallet')
    .option('-p, --port [port]', 'port to serve on [3000]', Number, process.env.port)
    .option('-h, --host [host]', 'hostname or IP your machine can be accessed at [' + process.env.host + ']', process.env.host)
    .parse(process.argv);



( async () =>{
    const options = program.opts();
    if (options.mode.toLowerCase() == "server") {
        startServer(options["port"]);
        open(`http://${options["host"]}:${options["port"]}/address/${options.wallet?options.wallet:""}`);
    }else
        cli(options.wallet);
    
})();