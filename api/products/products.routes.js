let controller            = require('./products.controller'),
    router                = require('express').Router(),
    registerGeneralRoutes = require('../general/general.routes')

registerGeneralRoutes(router, controller)

module.exports = router
