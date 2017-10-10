let mongoose = require('mongoose'),
    Schema   = mongoose.Schema

let AttributeSchema = new Schema({
	title: {
		type: String,
		required: 'Specify title of the attribute'
	},
	description: {
		type: String
	}
})

module.exports = mongoose.model('Attributes', AttributeSchema)
