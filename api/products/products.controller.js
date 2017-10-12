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

exports.search = (req, callback) => {
	let categories = (req.query.categories && req.query.categories.split(',')) || []
	
	let query = {}
	if (categories.length) {
		query = {
			category: { $in: categories }
		}
	}
	
	let promises = [
		Products
			.find(query)
			.skip(+req.query.skip)
			.limit(+req.query.limit)
			.exec(),
		Products
			.find(query)
			.count()
			.exec()
	]
	Promise.all(promises)
		.then(([products, total]) => {
			callback({
				meta: { total },
				data: { products }
			})
		})
		.catch((err) => {
			callback(err)
		})
}

exports.reserve = (req, callback) => {
	Products.findOneAndUpdate({ _id: req.params.id, quantity: { $gte: 1 } }, { $inc: { quantity: -1 } },
		(err, result) => {
			if (err) {
				callback(err, result)
				return
			}
			if (!result) {
				callback({
					status: 404,
					message: 'Unfortunately this product is not available at the time'
				})
				return
			}
			callback(null, {
				message: 'The product successfully reserved'
			})
		})
}
