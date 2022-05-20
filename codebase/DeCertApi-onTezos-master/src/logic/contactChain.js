const abiJSON = require('./abi.json');
const { ethers } = require('ethers');
require('dotenv').config();

// Java Script Object to store the contract adress of rinkeby network and mumbai network
const contractAdress = {
    rinkeby: process.env.RINKEBY_CONTRACT_ADDRESS,
    mumbai: process.env.MUMBAI_CONTRACT_ADDRESS
}

// Javascript object to store the providerOrUrl for different networks
const providerOrUrl = {
    rinkeby: process.env.RINKEBY,
    mumbai: process.env.MUMBAI
}

/**
 * 
 * @param {string} cid 
 * @param {string} filename 
 * @param {string} type
 * @param {string} recieversAddress
 * 
 * @return {Promise<void>}
 * 
 * @description This function will call the smart contract to mint non trasferable certificates to customer's account
 * 
 */
async function callContract(cid, filename, type, recieversAddress) {
    let provider = new ethers.providers.JsonRpcProvider(providerOrUrl[type]);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract_write = new ethers.Contract(contractAdress[type], abiJSON.abi, signer);
    await contract_write.mint(recieversAddress, `ipfs://${cid}/${filename}.json`).catch(err => {
        console.log(err);
    });
}

module.exports = {
    callContract: callContract
}