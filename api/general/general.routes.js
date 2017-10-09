let authMiddleware = require('../auth/auth.middleware'),
    { requestDecorator } = require('../helpers/request.decorator')

module.exports = (app, domain, controller) => {
	app.route(`/${domain}`)
		.get(requestDecorator(controller.getAll))
		.post(authMiddleware, requestDecorator(controller.save))
	
	app.route(`/${domain}/:id`)
		.get(requestDecorator(controller.get))
		.put(authMiddleware, requestDecorator(controller.update))
		.delete(authMiddleware, requestDecorator(controller.delete))
}
