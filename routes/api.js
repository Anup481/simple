const { response } = require('express');
const express = require('express');
const router = express.Router();
const Data = require('../models/database')

router.post('/fetch',function(req,res, next) {
	Data.create(req.body)
	.then(function(data){
		res.send(data);
	}).catch(next)
})

router.put('/fetch/:id',function(req,res, next) {
	Data.findByIdAndUpdate({_id: req.params.id},req.body)
	.then(function(data){
		Data.findOne({_id: req.params.id})
		.then(function(data){
			res.send(data);
		})
	})
})

router.delete('/fetch/:id',function(req,res, next) {
	Data.findByIdAndRemove({_id: req.params.id})
	.then(function(data){
		res.send(data);
	})
})

router.get('/fetch/:name',function(req,res, next) {
	res.send('<p>Name: '+req.query.name+'</p>');
})

module.exports = router;