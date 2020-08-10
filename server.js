/**
 * importig express and url parser to create a rest api
 */
const express = require('express');
const bodyParser= require('body-parser');

/**
 * exporting app to be used by other modules
 */
module.exports = app = express();

/**
 * using bodyparser to parse the url of json type
 */
app.use(bodyParser.json());

/**
 * importing routes
 */
require('./routes/greeting.routes')(app);

/**
 * @param {Integer} portNumber
 * @param {function} event status
 */
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
