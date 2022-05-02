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
 * @description For a given Wallet Adress this Function will return the positions
 */

exports.positions = async (address = isRequired("address")) => {
    try {
        let response = await axios.get(
            `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?key=${process.env.COVALENTHQ_API_KEY}`
        );
        if (Object.prototype.hasOwnProperty.call(response.data, "data")) {
            response.data.data.items = response.data.data.items.filter((e) => {
                return Object.prototype.hasOwnProperty.call(e, "supports_erc") && e.supports_erc != null && e.supports_erc.includes("erc20");
            }).map((e) => {
                delete e.logo_url;
                e.balance_eth = ethers.utils.formatEther(e.balance);
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
