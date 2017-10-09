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
		ref: 'Categories',
		required: 'Specify category of the attribute',
		validate: {
			isAsync: true,
			validator: function (value, callback) {
				let CategoriesModel = mongoose.model('Categories')
				CategoriesModel.find({ _id: value }, function (err, results) {
					callback(err || (results.length && (!results[0].children || !results[0].children.length)))
				})
			},
			message: 'Can\'t set attributes for categories that have children'
		}
	},
	description: {
		type: String
	}
})

module.exports = mongoose.model('Attributes', AttributeSchema)
