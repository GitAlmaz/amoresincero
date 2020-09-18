const mongoose = require('mongoose')



// module.exports = app => {
// 	new connect('mongodb://localhost:27017/vue-mailer', {
// 		useUnifiedTopology: true,
// 		useNewUrlParser: true,
// 		useFindAndModify: false
// 	})
// 		.then(res => console.log('connected'))
// 		.catch(err => console.error(err))
// 	mongoose.Promise = global.Promise
// 	process.on('SIGINT', cleanup)
// 	process.on('SIGTERM', cleanup)
// 	process.on('SIGHUP', cleanup)
// 	if (app) {
// 		app.set('mongoose', mongoose)
// 	}
// }
// const cleanup = () => {
// 	mongoose.connection.close(() => {
// 		process.exit(0)
// 	})
// }
