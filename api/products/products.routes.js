let controller            = require('./products.controller'),
    router                = require('express').Router(),
    { requestDecorator }  = require('../helpers/request.decorator'),
    registerGeneralRoutes = require('../general/general.routes')

registerGeneralRoutes(router, controller)
router
	.post('/reserve/:id', requestDecorator(controller.reserve))

module.exports = router
