const mongoose = require('mongoose');
/* Connection DB moongoAtlas */

const CONNECTION_DB = process.env.CONNECTION_DB

const MongoDBConnection = () =>{
 mongoose.connect( CONNECTION_DB ,{ useNewUrlParser: true})
 .then(() => console.log('Connection ok'))
 .catch((err) => console.log(err))
}

module.exports = MongoDBConnection;