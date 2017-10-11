let controller     = require('./auth.controller'),
    authMiddleware = require('./auth.middleware'),
    router         = require('express').Router()

router
	.get('/', authMiddleware, controller.getUser)
	.post('/', controller.login)

module.exports = router
