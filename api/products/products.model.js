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

let ProductSchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the product'
	},
	category: {
		type: ObjectId,
		ref: 'CategorySchema',
		required: 'Specify category of the product'
	},
	model: {
		type: String,
		required: 'Specify model of the product'
	},
	attributes: [{
		type: ObjectId,
		ref: 'AttributeValueSchema',
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
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Product', ProductSchema)