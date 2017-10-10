let mongoose = require('mongoose'),
    Users    = mongoose.model('Users'),
    jwt      = require('jsonwebtoken'),
    config   = require('../../config')

exports.login = (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(401)
		res.json({
			status: 401,
			message: 'Invalid username and/or password'
		})
		return
	}
	
	Users.findOne({ username: req.body.username }, (err, user) => {
		if (err) {
			res.send(err)
			return
		}
		if (!user || req.body.password !== user.password) {
			res.status(401)
			res.json({
				status: 401,
				message: 'Invalid username and/or password'
			})
			return
		}
		
		let token = jwt.sign({ username: user.username }, config.secret, {
			expiresIn: 36000 // 10 Hours
		})
		
		res.json({ token })
	})
}

exports.getUser = (req, res) => {
	Users.findOne({ username: req.user.username }, (err, user) => {
		if (err) {
			res.send(err)
			return
		}
		if (!user) {
			res.status(403)
			res.json({
				status: 403,
				message: 'Invalid token'
			})
		}
		res.json({
			username: user.username
		})
	})
}
