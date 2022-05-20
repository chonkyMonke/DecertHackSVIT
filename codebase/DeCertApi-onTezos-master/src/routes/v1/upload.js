const router = require('express').Router();
const { uploadCertificate } = require('../../logic/storage');

/**
 * 
 * @param {json} body 
 * @returns {json}
 * @description checks if the body schema is valid.
 */
function checkBody(body) {
    if (!body.name) {
        let err = new Error('Missing name');
        err.status = 400;
        body.error = err;
        return body
    } else {
        if (typeof(body.name) !== 'string') {
            let err = new Error('Invalid name');
            err.status = 400;
            body.error = err;
            return body
        }
    }
    if (!body.description) {
        let err = new Error('Missing description');
        err.status = 400;
        body.error = err;
        return body
    } else {
        if (typeof(body.description) !== 'string') {
            let err = new Error('Invalid description');
            err.status = 400;
            body.error = err;
            return body
        }
    }
    if (!body.validFrom) {
        let err = new Error('Missing validFrom');
        err.status = 400;
        body.error = err;
        return body
    } else {
        if (typeof(body.validFrom) !== 'number') {
            let err = new Error('Invalid validFrom');
            err.status = 400;
            body.error = err;
            return body
        } else {
            let validFrom = new Date(body.validFrom);
            body.validFrom = `${validFrom.getDate()}/${validFrom.getMonth() + 1}/${validFrom.getFullYear()}`;
        }
    }
    if (!body.validTo) {
        let err = new Error('Missing validTo');
        err.status = 400;
        body.error = err;
        return body
    } else {
        if (typeof(body.validTo) !== 'number') {
            let err = new Error('Invalid validTo');
            err.status = 400;
            body.error = err;
            return body
        } else {
            if (body.validTo==-1){
                body.validTo = 'Life Time';
            } else {
                let validTo = new Date(body.validTo);
                body.validTo = `${validTo.getDate()}/${validTo.getMonth() + 1}/${validTo.getFullYear()}`;
            }
        }
    }
    if (!body.recieversAddress) {
        let err = new Error('Missing recieversAddress');
        err.status = 400;
        body.error = err;
        return body
    }
    else {
        if ((typeof(body.recieversAddress) !== 'string' || body.recieversAddress.length !== 42 || !body.recieversAddress.startsWith('0x')) && body.type !== 3) {
            let err = new Error('Invalid recieversAddress');
            err.status = 400;
            body.error = err;
            return body
        }
    }
    if (!body.image) {
        let err = new Error('Missing image');
        err.status = 400;
        body.error = err;
        return body
    } else {
        if (Buffer.isBuffer(body.image)) {
            let err = new Error('Invalid image');
            err.status = 400;
            body.error = err;
            return body
        }
    }
    if (!body.type) {
        let err = new Error('Missing type');
        err.status = 400;
        body.error = err;
        return body
    } else {
        const typeCheck = body.type;
        if(typeCheck === 1) {
            body.type = 'rinkeby';
        } else if(typeCheck === 2) {
            body.type = 'mumbai';
        } else if (typeCheck === 3) {
            body.type = 'tezos';
        } else {
            let err = new Error('Invalid type');
            err.status = 400;
            body.error = err;
            return body
        }
    }
    body.error = false;
    return body;
}


/**
 * @api {post} /v1/upload Upload Certificate
 * @apiName UploadCertificate
 * @apiGroup Certificate
 * @apiVersion 1.0.0
 * @apiDescription Uploads a certificate to the ipfs server in filecoin.
 * @apiParam {String} name Name of the certificate.
 * @apiParam {String} description Description of the certificate.
 * @apiParam {Number} validFrom Valid from date of the certificate (epoched time).
 * @apiParam {Number} validTo Valid to date of the certificate (epoched tine). Send -1 for lifetime validity
 * @apiParam {String} image Image of the certificate in binary format.
 * @apiParam {String} recieversAddress Recievers address of the certificate (public key).
 * @apiParam {Number} type Type of the nft server (1 for rinkeby, 2 for mumbai).
 * @apiParamExample {json} Request-Example:
 * {
 *  "name": "DeCertificate",
 *  "description": "This is a test certificate for testing purposes dedicated to DeCert",
 *  "validFrom": 1546300800,
 *  "validTo": 1546300800,
 *  "image": imageObject
 *  "recieversAddress": "0x...",
 *  "type": 1
 * }
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "message": "Certificate Uploaded Successfully"
 * }
 */
router
.route('/')
.post(async (req, res) => {
    const body = checkBody(req.body);
    body.email = req.user.email;
    if (body.error) {
        res.status(body.error.status).send(body.error);
    } else {
        await uploadCertificate(req.body);
        res.json({
            success: true,
            message: 'Uploaded successfully'
        })
    };
    
    req.session = null;
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;