let mongoose = require('mongoose'),
    Schema   = mongoose.Schema

let CategorySchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the category'
	},
	description: {
		type: String
	},
	parent: {
		type: ObjectId,
		ref: 'CategorySchema'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Category', CategorySchema)
