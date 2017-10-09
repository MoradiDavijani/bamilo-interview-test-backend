let express    = require('express'),
    app        = express(),
    config     = require('./config'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    routes     = require('./api/api.routes')

require('./api/api.model')

mongoose.Promise = global.Promise
mongoose.connect(config.dbUrl, {
	useMongoClient: true
})

app.set('secret', config.secret)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(config.port)
console.log('Server Started On Port: ' + config.port)
