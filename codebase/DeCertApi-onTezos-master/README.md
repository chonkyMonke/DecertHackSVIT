# DeCert API Documentation

The DeCert API allows users to simply mint non-transferable NFT certificates with a simple single and fast API

Send the auth token as `Bearer $token`

| Route      | Reqest | Description                 |
| ---------- | ------ | --------------------------- |
| /v1/upload | POST   | Used to minted Certificates |

#### Install the required library

    npm install axios

#### Data to be sent to the API

Data Sets:
|Key|Required|Data Required|Description|
|---|---|---|---|
|name|true|String|Name of the certificate|
|description|true|String|Description of the certificate|
|validFrom|true|Integer|Epoched time needed to be sent|
|validTo|true|Integer|Epoched time needed to be sent. Send -1 to make the certificate show that it never expire|
|image|true|Buffer|Image Buffer after reading file|
|recieversAddress|true|String|Metamask account public address of users|
|type|true|Integer|1 for Ethereum and 2 for Polygon and 3 for Tezos|

##### <u>Type need to send and its meanings:</u>

1 - Ethereum  
2 - Polygon  
3 - Tezos

Example:

     {
     "name": "DeCertificate",
     "description": "This is a test certificate for testing purposes dedicated to DeCert",
     "validFrom": 1546300800,
     "validTo": 1546300800,
     "image": imageObject,
     "recieversAddress": "0x...",
     "type": 1
    }

#### Expected Output

    {
    	"message": "Certificate Uploaded Successfully"
    }

## Example Code

    const axios = require('axios');
    const fs = require('fs');
    const image = fs.readFileSync('<certificate_image_file_path>');

    const body = {
        "name": "Certificate of Appreciation",
        "image": image,
        "description": "provided as a token of Appreciation",
        "validFrom": Date.now(),
        "validTo": -1,
        "recieversAddress": "<add_recievers_account_address>",
        "type": 2,
    }

    axios.post('https://api.decert.hackspiration.xyz/v1/upload',
        body,
        {
            headers: {
            "Authorization": "Bearer <add_DeCert_API_KEY>",
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    }
    ).then((res) => {
        console.log(res.data);
    }).catch(err => {
        console.log(err.message);
    })
