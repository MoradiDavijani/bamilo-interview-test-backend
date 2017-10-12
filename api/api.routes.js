const register = (app) => {
	let authRoutes       = require('./auth/auth.routes'),
	    usersRoutes      = require('./users/users.routes'),
	    productsRoutes   = require('./products/products.routes'),
	    categoriesRoutes = require('./categories/categories.routes'),
	    attributesRoutes = require('./attributes/attributes.routes')
	
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
	
	app.use('/auth', authRoutes)
	app.use('/users', usersRoutes)
	app.use('/products', productsRoutes)
	app.use('/categories', categoriesRoutes)
	app.use('/attributes', attributesRoutes)
	
	app.use('/', function (req, res) {
		res.status(200)
		res.send('Hello there... Nothing to watch here!<br/>Click ' +
			'<a href="https://bamilo-interview-test-frontend.herokuapp.com/">HERE</a>' +
			' to explore the most amazing website in the world!')
	})
	
	app.use(function (req, res) {
		res.status(404)
		res.send({ message: `route ${req.method} of ${req.originalUrl} does not exists` })
	})
}

module.exports = { register }
