const {request} = require('chai');

/**
 * @description greeting service to manupulate greeting data
 * @return {object} message
 */
module.exports = class greetingService {
    /**
     * @description an function which returns Hello World message
     * @param {object} reqBody body of the request
     * @return {object} an object with string message value
     */
    getHello(reqBody) {
        console.log(reqBody);
        let message;
        if (reqBody.firstName !== undefined) {
            if (reqBody.firstName instanceof String ||
            typeof reqBody.firstName === 'string' ) {
                message = 'Hello '+reqBody.firstName;
            }
        } else {
            message = 'Hello World';
        }
        return {'message': message};
    };
};

