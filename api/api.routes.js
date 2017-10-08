let productsRoutes   = require('./products/products.routes'),
    categoriesRoutes = require('./categories/categories.routes'),
    attributesRoutes = require('./attributes/attributes.routes')

module.exports = (app) => {
	productsRoutes(app)
	categoriesRoutes(app)
	attributesRoutes(app)
}
