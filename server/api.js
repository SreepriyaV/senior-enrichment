'use strict'

const api = require('express').Router()
const db = require('../db')
const campus =require( "./Routes/campus")
const student = require( "./Routes/student")


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.get('/hello', (req, res) => res.send({hello: 'world'}))

// splits api routes into two different routers
api.use('/campuses', campus)
api.use('/students', student)


api.use(function(err, req, res, next) {
	console.error(err.message)
	res.status(500).send(err.message)
})


module.exports = api