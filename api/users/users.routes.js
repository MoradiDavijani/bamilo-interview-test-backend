module.exports = (app) => {
	let controller = require('./users.controller'),
	    generalRoutes = require('../general/general.routes')
	
	generalRoutes(app, 'users', controller)
}
