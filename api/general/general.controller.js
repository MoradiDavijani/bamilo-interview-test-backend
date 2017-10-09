module.exports = (Entity) => {
	return {
		get: (req, callback) => {
			Entity.findById(req.params.id, callback)
		},
		getAll: (req, callback) => {
			Entity.find({}, callback)
		},
		save: (req, callback) => {
			let newItem = new Entity(req.body)
			newItem.save(callback)
		},
		update: (req, callback) => {
			Entity.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, callback)
		},
		delete: (req, callback) => {
			Entity.findOneAndRemove({ _id: req.params.id }, callback)
		}
	}
}