let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

let AttributeSchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the category'
	},
	category: {
		type: ObjectId,
		ref: 'Categories'
	},
	description: {
		type: String
	}
})

module.exports = mongoose.model('Attributes', AttributeSchema)