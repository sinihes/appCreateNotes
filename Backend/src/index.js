require('dotenv').config()
const MongoDBConnection = require('./db/db')
const app = require('./app');

function main(){
 /* Connection server Express port 3000 */
 app.listen( app.get('port'), () =>{console.log(`Escuchando en el puerto ${ app.get('port')}` )})
 MongoDBConnection();
}

main()