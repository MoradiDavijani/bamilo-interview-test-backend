module.exports = (Entity) => {
	return {
		getAll: (req, res) => {
			Entity.find({}, function (err, items) {
				if (err) {
					res.send(err)
				}
				res.json(items)
			})
		},
		save: (req, res) => {
			let newItem = new Entity(req.body)
			newItem.save(function (err, item) {
				if (err) {
					res.send(err)
				}
				res.json(item)
			})
		},
		get: (req, res) => {
			Entity.findById(req.params.id, function (err, item) {
				if (err) {
					res.send(err)
				}
				res.json(item)
			})
		},
		update: (req, res) => {
			Entity.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, item) {
				if (err) {
					res.send(err)
				}
				res.json(item)
			})
		},
		delete: (req, res) => {
			Entity.remove({
				_id: req.params.id
			}, function (err) {
				if (err) {
					res.send(err)
				}
				res.json({ message: 'Item successfully deleted' })
			})
		}
	}
}