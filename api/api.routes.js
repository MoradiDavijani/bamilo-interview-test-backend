let authRoutes       = require('./auth/auth.routes'),
    usersRoutes      = require('./users/users.routes'),
    productsRoutes   = require('./products/products.routes'),
    categoriesRoutes = require('./categories/categories.routes'),
    attributesRoutes = require('./attributes/attributes.routes')

module.exports = (app) => {
	
	app.all('*', function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Auth-Token');
		if (req.method.toLowerCase() === 'options') {
			res.status(200).end();
		} else {
			next();
		}
	})
	
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
