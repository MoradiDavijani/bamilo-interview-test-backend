let usersRoutes      = require('./users/users.routes'),
    productsRoutes   = require('./products/products.routes'),
    categoriesRoutes = require('./categories/categories.routes'),
    attributesRoutes = require('./attributes/attributes.routes')

module.exports = (app) => {
	usersRoutes(app)
	productsRoutes(app)
	categoriesRoutes(app)
	attributesRoutes(app)
}
