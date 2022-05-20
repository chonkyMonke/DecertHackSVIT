const router = require('express').Router();

/**
 * @description Returns the basic welcome message
 */
router.route('/')
.post((_req, res) => {
    res.json({
        message: 'Welcome to the API And This is the version 1 of our decert api',
        type: 0
    })
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
})

router.use('/upload', require('./upload'));

module.exports = router;