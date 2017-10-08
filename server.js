let express    = require('express'),
    app        = express(),
    config     = require('./config'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    routes     = require('./api/api.routes'),
    models     = require('./api/api.model')

mongoose.Promise = global.Promise
mongoose.connect(config.dbUrl)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(morgan('dev'))

routes(app)

app.use(function (req, res) {
	res.status(404).send({ message: `url: ${req.originalUrl}  not found` })
})

app.listen(config.port)
console.log('Server Started On Port: ' + config.port)

// https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
// http://thejackalofjavascript.com/architecting-a-restful-node-js-app/