let authMiddleware       = require('../auth/auth.middleware'),
    { requestDecorator } = require('../helpers/request.decorator')

let initializeRoutes = (router, controller) => {
	router
		.get('/', requestDecorator(controller.getAll))
		.post('/', authMiddleware, requestDecorator(controller.save))
	if (controller.search) {
		router.get('/search', requestDecorator(controller.search))
	}
	router
		.get('/:id', requestDecorator(controller.get))
		.put('/:id', authMiddleware, requestDecorator(controller.update))
		.delete('/:id', authMiddleware, requestDecorator(controller.delete))
}

module.exports = initializeRoutes
