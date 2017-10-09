let jwt    = require('jsonwebtoken'),
    config = require('../../config')

module.exports = (req, res, next) => {
	let token = req.header('X-Auth-Token')
	
	jwt.verify(token, config.secret, function (err, decoded) {
		if (err) {
			res.status(403)
			return res.json({
				status: 403,
				message: 'You don\'t have access to this route'
			})
		}
		req.user = decoded
		return next()
	})
}
