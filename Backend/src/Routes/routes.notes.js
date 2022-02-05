const router = require('express').Router()
const { getNotes , postNote , getNote, putNote, deleteNote } = require('../controllers/controllers.notes')

router.route('/')
.get(getNotes)
.post(postNote)


router.route('/:id')
.get(getNote)
.put(putNote)
.delete(deleteNote)

module.exports = router;