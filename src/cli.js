const {
    isRequired
} = require("./utils/required");
const {
    balance,
    positions,
    transactions
} = require("./core");
const cj = require('color-json');


exports.cli = async (address = isRequired("address")) => {
    let data = {};
    data.balance = await balance(address);
    data.transactions = await transactions(address);
    data.positions = await positions(address);
    console.log(cj(data));

};
