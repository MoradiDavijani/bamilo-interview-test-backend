let mongoose          = require('mongoose'),
    Categories        = mongoose.model('Categories')

let restrictChangingChildren = (req, callback) => {
	if (req.body && req.body.children && req.body.children.length) {
		callback({
			status: 403,
			message: 'You can\'t set children of the category'
		})
		return true
	}
	return false
}

exports.get = (req, callback) => {
	Categories
		.findById(req.params.id, callback)
		.populate({
			path: 'parent',
			populate: { path: 'parent' }
		})
		.populate({
			path: 'children',
			populate: { path: 'children' }
		})
		.populate('attributes')
}

exports.getAll = (req, callback) => {
	Categories
		.find({ parent: null }, callback)
		.populate({
			path: 'children',
			populate: { path: 'children' }
		})
}

exports.search = (req, callback) => {
	Categories
		.find({ title: new RegExp(req.query.title, 'i') })
		.limit(+req.query.limit)
		.exec(callback)
}

exports.save = (req, callback) => {
	if (restrictChangingChildren(req, callback)) {
		return
	}
	
	let newCategory = new Categories(req.body)
	
	newCategory.save((err, result) => {
		if (result && result.parent) {
			Categories.update({ _id: result.parent }, { $addToSet: { children: result._id } }, (addErr, addResult) => {
				// ToDo: rollback if updating children returned any error
				callback(err, result)
			})
		} else {
			callback(err, result)
		}
	})
}

exports.update = (req, callback) => {
	if (restrictChangingChildren(req, callback)) {
		return
	}
	
	Categories.findOneAndUpdate({ _id: req.params.id }, req.body, { new: false }, (err, result) => {
		let oldParent = (result && result.parent && result.parent.toString()) || '',
		    newParent = req.body.parent || ''
		
		if (!result || err) {
			callback(err, result)
		}
		if (oldParent !== newParent) {
			let promises = []
			if (oldParent) {
				promises.push(Categories.update({ _id: oldParent }, { $pull: { children: result._id } }).exec())
			}
			if (newParent) {
				promises.push(Categories.update({ _id: newParent }, { $addToSet: { children: result._id } }).exec())
			}
			Promise.all(promises)
				.then(() => {
					result.parent = newParent
					callback(err, result)
				})
				.catch(() => {
					// ToDo: rollback if updating children returned any error
					console.error('Error occurred during updating children')
				})
		}
	})
}

exports.delete = (req, callback) => {
	Categories.findOneAndRemove({ _id: req.params.id }, (err, result) => {
		if (result && result.parent) {
			Categories.update({ _id: result.parent }, { $pull: { children: result._id } }, (addErr, addResult) => {
				// ToDo: rollback if updating children returned any error
				callback(err, result)
			})
		} else {
			callback(err, result)
		}
	})
}