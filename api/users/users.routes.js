module.exports = (app) => {
	let controller     = require('./users.controller'),
	    authMiddleware = require('../auth/auth.middleware'),
	    generalRoutes  = require('../general/general.routes')
	
	app.route('/users')
		.get(authMiddleware)
	
	app.route('/users/:id')
		.get(authMiddleware)
		
	generalRoutes(app, 'users', controller)
}
