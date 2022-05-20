const router = require('express').Router();
const business = require('./../schema/business');

/**
 * 
 * @param {json} req
 * @param {json} res
 * 
 * res.body: {
 *         "email": "useremail@example.com",
 *  }
 * 
 * @description Logs in user and returns token
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
    business.findOne({email: req.body.email})
        .then((account) => {
            if(!account){
                let err = new Error("Account not found");
                err.status = 404
                next(err)
            }
            res.json(account);
        })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;