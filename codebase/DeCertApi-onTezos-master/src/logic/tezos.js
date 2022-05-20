const { TezosToolkit, MichelsonMap } = require("@taquito/taquito");
const { InMemorySigner } = require('@taquito/signer')
const { char2Bytes } = require("@taquito/utils");
require('dotenv').config();

const signer = new InMemorySigner(process.env.PRIVATE_KEY_TEZOS);
const Tezos = new TezosToolkit(process.env.RPC_URL);

Tezos.setSignerProvider(signer);

/**
 * 
 * @param {string} address
 * @param {string} url
 * @param {string} token_id
 * 
 * @returns {number | any}
 */
const getContract = async () => {
  const contract = await Tezos.contract.at(process.env.CONTRACT_ADDRESS);
  return contract;
};

const mintNFT = async (address, url, token_id) => {
  const amount = 1;
  const contract = await getContract();
  url = char2Bytes(url);
  const op = await contract.methods
    .mint(address, amount, MichelsonMap.fromLiteral({ "": url }), token_id)
    .send();
  return await op.confirmation();
};

module.exports = {
    mintNFT
}