const express = require('express');
const chalkRainbow = require('chalk-rainbow');
const {isRequired} = require("./utils/required");
const expressListRoutes = require('express-list-routes');
const {
    balance,
    positions,
    transactions
} = require("./core");


/**
 * @param {express_app} app 
 */
var configureAllRoutes = exports.configureAllRoutes = function (app) {
    app.get('/', (req, res) => {
        res.send("");
    });
    app.get('/address/:address', async (req, res) => {
        let address = req.params.address;
        let data = {};
        data.balance = await balance(address);
        data.transactions = await transactions(address);
        data.positions = await positions(address);
        res.send(data);
    });
};

/**
 * 
 * @param {int} port 
 */
exports.startServer = (port = isRequired("port")) => {
    let app = express();
    configureAllRoutes(app);
    app.listen(port, () => {
        console.log(chalkRainbow(`We are listening on port ${port}`));
        expressListRoutes(app, {
            prefix: './'
        });
    });

};
