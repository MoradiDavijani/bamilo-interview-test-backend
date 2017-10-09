let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

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
		ref: 'Categories',
		select: true
	},
	children: [{
		type: ObjectId,
		ref: 'Categories'
	}]
})

module.exports = mongoose.model('Categories', CategorySchema)
