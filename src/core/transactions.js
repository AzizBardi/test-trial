const {
    ethers
} = require("ethers");
const isRequired = require("../utils/required");
const axios = require('axios').default;
require('dotenv').config();


/**
 * 
 * @param {String} address 
 * @returns 
 * @description For a given Wallet Adress this Function will return the transactions
 */

exports.transactions = async (address = isRequired("address")) => {

    try {
        let response = await axios.get(
            `https://api.covalenthq.com/v1/1/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=${process.env.COVALENTHQ_API_KEY}`
        );
        if (Object.prototype.hasOwnProperty.call(response.data,"data")) {
            response.data.data.items.map(e => {
                e.value_eth = ethers.utils.formatEther(e.value);
                return e;
            });
            return (response.data.data.items);

        } else
            throw "Error data parsing";

    } catch (error) {
        console.error(error.toString());
        throw error;
    }
};
