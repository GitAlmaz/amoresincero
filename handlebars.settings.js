const handlebarOptions = {
	viewEngine: {
			extName: '.handlebars',
			partialsDir: 'server/views/patials',
			layoutsDir: 'server/views/layouts',
			defaultLayout: '',
	},
	viewPath: 'server/views/templates',
	extName: '.handlebars',
};
transporter.use('compile', hbs(handlebarOptions));