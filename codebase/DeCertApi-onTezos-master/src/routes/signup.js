const router = require('express').Router();
const Business = require('../schema/business');

// Checks body to avoid error
function checkBody(body) {
    if (!body.name) {
        let err = new Error('Missing name');
        err.status = 400;
        body.error = err;
    }
    if(!body.companyName) {
        let err = new Error('Missing company name');
        err.status = 400;
        body.error = err;
    }
    if(!body.email) {
        let err = new Error('Missing email');
        err.status = 400;
        body.error = err;
    }
    body.error = false;
    return body
}

/**
 * 
 * @param {json} req
 * @param {json} res
 * 
 * res.body: {
 *         "email": "useremail@example.com",
 *         "name": "user name",
 *         "companyName": "company name",
 *  }
 * 
 * @description signups a new user
 */
router
.route('/')
.post((req, res) => {
    const body = checkBody(req.body);
    if(body.error) {
        res.status(400).json(body);
    } else {
        const businessAccount = new Business({
            name: body.name,
            email: body.email,
            companyName: body.companyName,
        })
        businessAccount
            .save()
            .then(business => {
                res.json(business);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
});

module.exports = router;