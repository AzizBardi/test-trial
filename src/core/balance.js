const {
    ethers
} = require("ethers");
const {isRequired} = require("../utils/required");

/**
 * @description For a given Address, this function will return the Balance 
 * @param {string} address 
 * @returns balance
 */
exports.balance = async (address = isRequired("address")) => {
    let provider = new ethers.providers.EtherscanProvider(
        "homestead",
        process.env.ETHERSCAN_API_KEY
    );
    let balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
};
