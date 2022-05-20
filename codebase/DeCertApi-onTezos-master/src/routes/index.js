const router = require('express').Router();

/**
 * @description Returns the basic welcome message
 */
router
.route('/')
.get(async (_req, res) => {
    res.json({ 
        message: 'Welcome to our DeCert API',
        type: 0
    });
})
.all((_res, _req, next) => {
    let err = new Error('Method not allowed');
    err.status = 405;
    next(err);
})

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/minted', require('./minted'));

router.use('/v1', require('./v1'));

module.exports = router;