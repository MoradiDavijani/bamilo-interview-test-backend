module.exports = (app) => {
	let controller = require('./products.controller'),
	    generalRoutes = require('../general/general.routes')
	
	generalRoutes(app, 'products', controller)
}
