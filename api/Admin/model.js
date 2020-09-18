const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Пожалуйста введите Имя']
	},
	password: {
		type: String,
		required: [true, 'Пожалуйста введите пароль']
	}
})
const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
