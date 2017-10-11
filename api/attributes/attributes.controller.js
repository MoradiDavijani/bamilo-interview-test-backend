let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Attributes        = mongoose.model('Attributes')

Object.assign(exports, generalController(Attributes))

exports.search = (req, callback) => {
	Attributes
		.find({ title: new RegExp(req.query.title, 'i') })
		.limit(+req.query.limit)
		.exec(callback)
}
