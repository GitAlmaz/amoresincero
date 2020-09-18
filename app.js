const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const path = require('path')
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ extended: true, limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
require('./api/routerHandler')(app)

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'dist')))
	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}

const PORT = process.env.PORT || 80

async function start() {
	try {
		app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
	} catch (e) {
		console.log('Server Error', e.message)
		process.exit(1)
	}
}
start()
