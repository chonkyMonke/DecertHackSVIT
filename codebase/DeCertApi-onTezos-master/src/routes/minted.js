const router = require('express').Router();
const certificates = require('./../schema/certificates')



/**
 * @param {json} req
 * @param {json} res
 * 
 * res.body: {
 *        "email": "user@example.com",
 * }
 * 
 * @description returns all certificates minted by a user
 * 
 */
router
.route('/')
.post((req, res, next) => {
    if (!req.body.email) {
        let err = new Error("Email is required");
        err.status = 400;
        next(err);
        return;
    }
    certificates.find({email: req.body.email})
    .then((certi) => {
        res.json({
            status: 200,
            message: 'Success',
            mintedCertificates: certi
        });
    })
    .catch(() => {
        let err = new Error('Error while fetching minted certificates');
        err.status = 500;
        next(err);
    })
    
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;