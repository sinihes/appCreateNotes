const express = require('express')
const router = express.Router()



router.route('/')
 .get((req, res) => {res.send('User GET - funciona bien')})
 .post((req, res) => {res.send('USER POST funciona bien')})
 



 router.route('/:id')
 .get((req, res) => {res.send('Users GET ID -  funciona bien')})
 .put((req, res) => {res.send('User Actualizar ID -  funciona bien')})
 .delete((req, res) => {res.send('User Delete ID -  funciona bien')})

 


module.exports = router;