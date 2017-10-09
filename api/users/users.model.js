let dbOptions = require('../helpers/db.options'),
    mongoose  = require('mongoose'),
    Schema    = mongoose.Schema

let UserSchema = new Schema({
	username: {
		type: String,
		required: 'Username is required'
	},
	password: {
		// ToDo: Hash passwords
		type: String,
		minlength: [6, 'Password should have at least 6 characters'],
		required: 'Password is required'
	}
}, dbOptions)

UserSchema.path('username').validate(function (value, callback) {
	let UserModel = mongoose.models.Users
	UserModel.find({ 'username': value }, function (err, results) {
		callback(err || results.length === 0)
	})
}, 'This username already exists')

module.exports = mongoose.model('Users', UserSchema)
