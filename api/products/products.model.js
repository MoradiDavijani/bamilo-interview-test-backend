let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

let AttributeValueSchema = new Schema({
	attribute: {
		type: ObjectId,
		ref: 'Attributes',
		required: 'Please specify attribute of attribute-value object'
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
		required: 'Specify category of the product'
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