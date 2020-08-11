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
    app.get('/', greeting.find);

    app.post('/', greeting.create);

    app.put('/', greeting.modify);

    app.delete('/', greeting.delete);
};

