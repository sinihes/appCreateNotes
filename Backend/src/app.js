const express = require('express')
const app = express();


/* Middleware */



/* Statics */




/* Settings */
app.use('/api/notes', require('./Routes/routes.notes'));
app.use('/api/users', require('./Routes/routes.users')); 




/* Server config  */
const port = 3000;
app.set('port', process.env.PORT || port )



module.exports = app;