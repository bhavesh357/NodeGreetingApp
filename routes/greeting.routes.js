/**
 * importing greeting controller
 */
const greeting = require('../controllers/greeting.controller');

/**
 *
 * @param {function} app it takes http requests
 */
module.exports = (app) => {
    app.get('/', greeting.find);
};
