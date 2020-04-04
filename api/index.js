const router = require('express').Router()

//Express API here
router.get('/greeting', (req, res) => {
	console.log('Hello World!')
})

module.exports = router