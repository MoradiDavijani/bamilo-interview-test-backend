module.exports = (app, domain, controller) => {
	app.route(`/${domain}`)
		.get(controller.getAll)
		.post(controller.save)
	
	app.route(`/${domain}/:id`)
		.get(controller.get)
		.put(controller.update)
		.delete(controller.delete)
}
