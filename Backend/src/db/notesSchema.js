const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
 titleNote: String,
 descriptioNote: String,
 dataNote: {
   type: Date,
   default: Date.now
 }
});

const Notes = mongoose.model('Users', notesSchema);
 

module.exports = Notes;