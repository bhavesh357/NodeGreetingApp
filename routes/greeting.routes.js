/**
 * importing greeting controller
 */
const greeting = require('../controllers/greeting.controller');

/**
 *
 * @param {function} app that takes http requests
 */
module.exports = (app) => {
    app.get('/', greeting.find);

    app.post('/', greeting.create);

    app.put('/', greeting.modify);

    app.delete('/', greeting.delete);
};

