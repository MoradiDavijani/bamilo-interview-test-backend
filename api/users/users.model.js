let mongoose = require('mongoose'),
    Schema   = mongoose.Schema

let UserSchema = new Schema({
	username: {
		type: String,
		required: 'Username is required'
	},
	password: {
		type: String,
		required: 'Password is required'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', UserSchema)
