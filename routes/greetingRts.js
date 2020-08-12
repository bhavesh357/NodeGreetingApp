/**
 * @description importing greeting controller
 * @var {class} greeting class instance of greetingController
 */
const Controller = require('../controllers/greetingCtrl');

// creating a instance of controller
const greeting= new Controller();

/**
 * @description Exports greeting routes
 * @param {function} app that takes http requests
 */
module.exports = (app) => {
    app.get('/greeting/', greeting.find);

    app.get('/greeting/:greetId', greeting.findOne);

    app.post('/greeting/', greeting.create);

    app.put('/greeting/', greeting.modify);

    app.delete('/greeting', greeting.delete);
};

