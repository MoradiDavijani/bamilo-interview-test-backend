let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

let AttributeValueSchema = new Schema({
	attribute: {
		type: ObjectId,
		ref: 'Attributes'
	},
	value: String
})

let ProductSchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the product'
	},
	category: {
		type: ObjectId,
		ref: 'Categories',
		required: 'Specify category of the product',
		validate: {
			isAsync: true,
			validator: function (value, callback) {
				let CategoriesModel = mongoose.model('Categories')
				CategoriesModel.find({ _id: value }, function (err, results) {
					callback(err || (results.length && (!results[0].children || !results[0].children.length)))
				})
			},
			message: 'Can\'t set products for categories that have children'
		}
	},
	model: {
		type: String,
		required: 'Specify model of the product'
	},
	attributes: [AttributeValueSchema],
	imgUrl: {
		type: String
	},
	description: {
		type: String
	},
	price: {
		type: Number
	},
	status: {
		type: String,
		required: 'Specify status of the product',
		enum: ['Not Available', 'Available', 'Coming Soon'],
		default: 'Not Available'
	},
	quantity: {
		type: Number
	}
})

module.exports = mongoose.model('Products', ProductSchema)