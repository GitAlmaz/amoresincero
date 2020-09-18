const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const { mail, password } = require('./default.json')
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		type: 'login',
		user: mail,
		pass: password
	},
	tls: {
		rejectUnauthorized: false
	}
})

exports.alertMail = ({ birth_location, birthday, citizenship, contact_number, email, height_weight, name, place_of_live, photos }) =>
	transporter.sendMail({
		from: email,
		to: 'belozerov.inhs.artem@gmail.com',
		subject: 'Request alert',
		template: 'alert',
		attachments: [...photos],
		context: {
			birth_location,
			birthday,
			citizenship,
			contact_number,
			email,
			height_weight,
			name,
			place_of_live
		}
	})

const handlebarOptions = {
	viewEngine: {
		extName: '.handlebars',
		partialsDir: 'server/views/patials',
		layoutsDir: 'server/views/layouts',
		defaultLayout: ''
	},
	viewPath: 'server/views/templates',
	extName: '.handlebars'
}
transporter.use('compile', hbs(handlebarOptions))
