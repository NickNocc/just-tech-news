const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.unlock('/users', userRoutes);

module.exports = router;