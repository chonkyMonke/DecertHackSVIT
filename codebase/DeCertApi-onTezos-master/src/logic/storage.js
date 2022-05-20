const { Web3Storage, File } = require('web3.storage');
const { callContract } = require('./contactChain');
const { mintNFT } = require('./tezos');
const Certificates = require('./../schema/certificates');
const TokenId = require('./../schema/tokenId');
const axios = require('axios').default;
require('dotenv').config();

// Created a unique uid for the file name.
function uid() {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
}

/**
 * 
 * @returns {Promise<string>}
 * @description Returns the web3.storage client.
 */
function makeStorageClient() {
    return new Web3Storage({ token: process.env.WEBSTORAGE });
}

/**
 * 
 * @param {string} recieversAddress 
 * @param {string} fileName
 *  
 * @returns {Promise<void>}
 * 
 * @description Mints a token to the recievers address.
 */
async function completeTezosMinting(recieversAddress, fileName){
    const response = await axios.get(
        `https://api.hangzhounet.tzkt.io/v1/contracts/${process.env.CONTRACT_ADDRESS}/bigmaps/token_metadata/keys`
      );
    const data = response.data;
    const token_id = parseInt(data[data.length - 1]["value"]["token_id"]) + 1;
    await mintNFT(recieversAddress, fileName, token_id)
            .catch(console.log);
}

/**
 * 
 * @param {Web3Storage} client 
 * @param {string} rootCid 
 * @param {json} body 
 * @param {Date} now
 * @schema body -> {
 *  name: string,
 *  description: string,
 *  validFrom: number,
 *  validTo: number,
 *  recieversAddress: string
 * }
 * @returns {Promise<void>}
 * @description Creates a json object from the body and calls the smart contract function.
 */
async function uploadJson(client, rootCid, body, now, fileName){
    const jsonToUpload = {
        name: body.name,
        description: body.description,
        validFrom: body.validFrom,
        validTo: body.validTo,
        image: `ipfs://${rootCid}/${fileName}.png`
    };
    const saveCertifiate = new Certificates({
        name: body.name,
        address: body.recieversAddress,
        date: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`,
        email: body.email
    });
    const files = [new File([JSON.stringify(jsonToUpload)], `${now}.json`)];
    await Promise.all([
        client.put(files, {
            name: `Json ${now}`,
            onRootCidReady: async(rootCid) => {
                if(body.type==='rinkeby' || body.type==='mumbai'){
                    callContract(rootCid, now, body.type, body.recieversAddress);
                } else if(body.type==='tezos') {
                    await completeTezosMinting(body.recieversAddress, `ipfs://${rootCid}/${now}.json`)
                        .catch(console.log);
                }
                else {
                    console.log('Unsuccesful');
                    return;
                }
            }
        }),
        saveCertifiate.save()
    ]).catch((err) => {
        console.log(err)
    })
    
}

/**
 * 
 * @param {json} body
 * @schema body -> {
 *  name: string,
 *  image: buffer,
 *  description: string,
 *  validFrom: number,
 *  validTo: number,
 *  recieversAddress: string,
 *  type: string
 * }
 * @returns {Promise<void>}
 * @description Uploads a file to the ipfs server in filecoin. (web3.storage)
 */
async function uploadCertificate(body){
    const fileName = uid();
    const now = new Date()
    const client = makeStorageClient();
    const binary = Buffer.from(body.image);
    const files = [new File([binary], `${fileName}.png`)];
    await client.put(files, {
        name: `Image ${now}`,
        onRootCidReady: (rootCid) => {
            uploadJson(client, rootCid, body, now, fileName);
        },
    }).catch((err) => {
        console.log(err);
    })
};

module.exports = {
    uploadCertificate: uploadCertificate
};