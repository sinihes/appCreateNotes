const createUsers = {}

createNotes.getUsers =  (req, res) => {res.json({messager : ['User']})}

createNotes.postUser = (req, res) => {res.send('User POST funciona bien')}

createNotes.getUser = (req, res) => {res.send('User GET ID -  funciona bien')}

createNotes.putUser = (req, res) => {res.send('User Actualizar ID -  funciona bien')}

createNotes.deleteUser = (req, res) => {res.send('User Delete ID -  funciona bien')}

module.exports = createNotes;