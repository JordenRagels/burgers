// Required dependencies
const express = require('express')

// Importing burger model to use its database functionality
const burger = require('../models/burger')

// Using express router
const router = express.Router()

// Create all routes and set up logic within those routes

// Home
router.get('/', (req, res) => {
	res.redirect('/index')
})

// selectAll
router.get('/index', (req, res) => {
	burger.all(data => {
		let handlebarsObj = {
			burgers: data
		}
		console.log(handlebarsObj)
		res.render('index', handlebarsObj)
	})
})

//insertOne (add burger button)
router.post('/api/burgers', (req, res) => {
	burger.insert(req.body.burger_name, data => {
		res.redirect('/index')
	})
})

//updateOne (eat the burger button)
router.post('/api/burgers/:id', (req, res) => {
	let condition = req.params.id
	console.log('condition ' + condition)
	burger.update(condition, data => {
		res.redirect('/index')
	})
})

//deleteOn (clear burger from db)
router.delete('api/burgers/:id', (req, res) => {
	let cleared = 'id = ' + req.params.id
	console.log('id to delete' + condition)

	burger.clear(cleared, result => {
		res.redirect('/index')
	})
})

module.exports = router
