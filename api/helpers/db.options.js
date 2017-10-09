module.exports = {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	},
	id: false,
	versionKey: false,
	toObject: {
		virtuals: true,
		getters: true
	},
	toJSON: {
		virtuals: true,
		getters: true
	}
}