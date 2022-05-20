const db = require('./logic/database');
const app = require('./server');

// Start the server
async function startServer() {
    await db.connect().catch(err => {
        console.error(err.message);
        process.exit(1);
    })
    var server = app.listen( process.env.PORT || 3000, () => {
        console.log('Listening on port ' + server.address().port);
    });
}

startServer();