const { requestDecorator } = require('../helpers/request.decorator')

module.exports = (app, domain, controller) => {
	app.route(`/${domain}`)
		.get(requestDecorator(controller.getAll))
		.post(requestDecorator(controller.save))
	
	app.route(`/${domain}/:id`)
		.get(requestDecorator(controller.get))
		.put(requestDecorator(controller.update))
		.delete(requestDecorator(controller.delete))
}
