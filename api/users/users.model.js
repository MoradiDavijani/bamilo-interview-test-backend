let dbOptions = require('../helpers/db.options'),
    mongoose  = require('mongoose'),
    Schema    = mongoose.Schema

let UserSchema = new Schema({
	username: {
		type: String,
		required: 'Username is required',
		validate: {
			isAsync: true,
			validator: function (value, callback) {
				let UserModel = mongoose.model('Users')
				UserModel.find({ 'username': value }, function (err, results) {
					callback(err || !results.length)
				})
			},
			message: 'This username already exists'
		}
	},
	password: {
		// ToDo: Hash passwords
		type: String,
		minlength: [6, 'Password should have at least 6 characters'],
		required: 'Password is required'
	}
}, dbOptions)

module.exports = mongoose.model('Users', UserSchema)
