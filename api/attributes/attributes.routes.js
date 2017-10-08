module.exports = (app) => {
	let controller    = require('./attributes.controller'),
	    generalRoutes = require('../general/general.routes')
	
	generalRoutes(app, 'attributes', controller)
}
