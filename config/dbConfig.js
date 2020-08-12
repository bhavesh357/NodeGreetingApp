// db config

// importing mongoose to connect to db
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to db
mongoose.connect('mongodb://localhost:27017/greeting', {
    useNewUrlParser: true,
}).then( () => {
    console.log('Successfully Connected to batabase');
}).catch( (err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
