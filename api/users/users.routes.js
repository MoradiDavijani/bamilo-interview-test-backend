let controller            = require('./users.controller'),
    router                = require('express').Router(),
    authMiddleware        = require('../auth/auth.middleware'),
    registerGeneralRoutes = require('../general/general.routes')

router
	.get('/', authMiddleware)
	.get('/:id', authMiddleware)

registerGeneralRoutes(router, controller)

module.exports = router
