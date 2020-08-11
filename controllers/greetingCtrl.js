// importing service
const Service = require('../services/greetingSrvc');

// creating a instance of service
const greeting = new Service();

/**
* @description a greeting controller that contains
*      method to manupulate greetings
*/
module.exports = class greetingController {
    /**
    * @description a function to find the greeting
    * @param {object} req
    * @param {object} res
    */
    find(req, res) {
        const greetingMessage =greeting.getHello();
        res.send(greetingMessage);
    }

    /**
    * @description a function to create the greeting
    * @param {object} req
    * @param {object} res
    */
    create(req, res) {
        const greetingMessage =greeting.getHello();
        res.send(greetingMessage);
    }

    /**
    * @description a function to modify the greeting
    * @param {object} req
    * @param {object} res
    */
    modify(req, res) {
        const greetingMessage =greeting.getHello();
        res.send(greetingMessage);
    }

    /**
    * @description a function to delete the greeting
    * @param {object} req
    * @param {object} res
    */
    delete(req, res) {
        const greetingMessage =greeting.getHello();
        res.send(greetingMessage);
    }
}
