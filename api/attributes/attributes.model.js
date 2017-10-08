let mongoose = require('mongoose'),
    Schema   = mongoose.Schema

let AttributeSchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the category'
	},
	category: {
		type: ObjectId,
		ref: 'CategorySchema'
	},
	description: {
		type: String
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Attribute', AttributeSchema)