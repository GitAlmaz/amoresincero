const { Router } = require('express')
const Mailer = require('../../config/mailer')

const router = Router()

router.post('/request', async (req, res) => {
	try {
		Mailer.alertMail(req.body)
		res.status(200).json({
			status: 1,
			msg: 'Request sended successful'
		})
	} catch (err) {
		res.status(500).json({
			error: err
		})
	}
})

module.exports = router
