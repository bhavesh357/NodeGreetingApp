/**
 * @description greeting service to manupulate greeting data
 * @return {object} message
 */
module.exports = class greetingService {
    /**
     * @description an function which returns Hello World message
     * @return {object} an object with string message value
     */
    getHello() {
        return {'message': 'Hello'};
    };
};

