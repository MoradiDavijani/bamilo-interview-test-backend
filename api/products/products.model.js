let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

let AttributeValueSchema = new Schema({
	attribute: {
		type: ObjectId,
		ref: 'AttributeSchema',
		required: 'Attribute field is not specified'
	},
	value: {
		type: String
	}
})

mongoose.model('AttributeValue', AttributeValueSchema)

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
	attributes: [{
		type: ObjectId,
		ref: 'AttributeValue',
		required: 'Specify model of the product'
	}],
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
		type: [{
			type: String,
			enum: ['Not Available', 'Available', 'Coming Soon']
		}],
		default: ['Not Available']
	},
	quantity: {
		type: Number
	}
})

module.exports = mongoose.model('Products', ProductSchema)