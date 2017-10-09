let authMiddleware = require('./auth.middleware')

module.exports = (app) => {
	let AuthController = require('./auth.controller')
	
	app.route(`/auth`)
		.get(authMiddleware, AuthController.getUser)
		.post(AuthController.login)
}
