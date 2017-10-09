let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Products          = mongoose.model('Products')

Object.assign(exports, generalController(Products))

exports.get = (req, callback) => {
	Products
		.findById(req.params.id, callback)
		.populate('category')
		.populate('attributes.attribute')
}

exports.getAll = (req, callback) => {
	Products
		.find({ parent: null }, callback)
		.populate('category')
		.populate('attributes.attribute')
}
