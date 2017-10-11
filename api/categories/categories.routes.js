let controller            = require('./categories.controller'),
    router                = require('express').Router(),
    registerGeneralRoutes = require('../general/general.routes')

registerGeneralRoutes(router, controller)

module.exports = router
