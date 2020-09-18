const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	birthday: {
		type: String,
		required: true
	},
	birth_location: {
		type: String,
		required: true
	},
	citizenship: {
		type: String,
		required: true
	},
	place_of_live: {
		type: String,
		required: true
	},
	contact_number: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	height_weight: {
		type: String,
		required: true
	}
})
const User = new model('User', userSchema)
module.exports = User
