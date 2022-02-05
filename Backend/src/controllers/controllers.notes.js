const Notes = require('../db/notesSchema');

const createNotes = {}

createNotes.getNotes =  (req, res) => {res.send('GET notes')}

createNotes.postNote = async (req, res) => {
 let note = new Notes({

  titleNote: req.body,
  descriptioNote: req.body,
  dataNote: req.body,

 /*titleNote: req.body.titleNote,
  descriptioNote: req.body.descriptioNote,
  dataNote: req.body.descriptioNote, 
  */
 });

 try {
  const newNote = await note.save();
  res.status(201).json({newNote})
  console.log('va bien');
 } catch (error) {
  res.status(400).json({message: error.message})
 }

}

createNotes.getNote = (req, res) => {res.send('Note GET ID -  funciona bien')}

createNotes.putNote = (req, res) => {res.send('Note Actualizar ID -  funciona bien')}

createNotes.deleteNote = (req, res) => {res.send('Note Delete ID -  funciona bien')}

module.exports = createNotes;