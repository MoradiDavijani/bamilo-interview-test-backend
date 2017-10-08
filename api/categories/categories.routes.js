module.exports = (app) => {
	let controller = require('./categories.controller'),
	    generalRoutes = require('../general/general.routes')
	
	generalRoutes(app, 'categories', controller)
}
