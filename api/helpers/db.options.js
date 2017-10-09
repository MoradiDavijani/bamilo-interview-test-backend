module.exports = {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	},
	id: false,
	versionKey: false,
	toObject: {
		virtuals: true,
		getters: true,
		transform: (doc, ret) => {
			ret.id = ret._id
			delete ret._id
			delete ret.__v
			return ret
		}
	},
	toJSON: {
		virtuals: true,
		getters: true,
		transform: (doc, ret) => {
			ret.id = ret._id
			delete ret._id
			delete ret.__v
			return ret
		}
	}
}