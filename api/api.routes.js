let authRoutes       = require('./auth/auth.routes'),
    usersRoutes      = require('./users/users.routes'),
    productsRoutes   = require('./products/products.routes'),
    categoriesRoutes = require('./categories/categories.routes'),
    attributesRoutes = require('./attributes/attributes.routes')

module.exports = (app) => {
	authRoutes(app)
	usersRoutes(app)
	productsRoutes(app)
	categoriesRoutes(app)
	attributesRoutes(app)
	
	app.use(function (req, res) {
		res.status(404)
		res.send({ message: `route ${req.method} of ${req.originalUrl} does not exists` })
	})
}
