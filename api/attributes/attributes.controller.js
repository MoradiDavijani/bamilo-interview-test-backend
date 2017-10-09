let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Attributes        = mongoose.model('Attributes')

Object.assign(exports, generalController(Attributes))

exports.get = (req, callback) => {
	Attributes
		.findById(req.params.id, callback)
		.populate('category')
}

exports.getAll = (req, callback) => {
	Attributes
		.find({ parent: null }, callback)
		.populate('category')
}
