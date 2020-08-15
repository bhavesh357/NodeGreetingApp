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
    * @description a function to get the hello world greeting
    * @param {object} req
    * @param {object} res
    */
    find(req, res) {
        const greetingMessage = greeting.getHello(req.body);
        res.send(greetingMessage);
    }

    /**
    * @description a function to find the greeting by id
    * @param {object} req
    * @param {object} res
    */
    async findOne(req, res) {
        try {
            greeting.findOne(req.params.greetId,res,(res,item) => {res.send(item)});
        } catch (err) {
            res.status(500).send({"error": err.message});
        }
    }

    /**
    * @description a function to find the all greeting
    * @param {object} req
    * @param {object} res
    */
    async findAll(req, res) {
        try {
            greeting.findAll(res,(res,item) => {res.send(item)});
        } catch (err) {
            res.status(500).send(err);
        }
    }

    /**
    * @description a function to create the greeting
    * @param {object} req
    * @param {object} res
    */
    async create(req, res) {
        try {
            greeting.createGreeting(req.body,res,(res,item) => {res.send(item)});
        } catch (err) {
            res.status(500).send({"error":err.message});
        }
    }

    /**
    * @description a function to modify the greeting
    * @param {object} req
    * @param {object} res
    */
    modify(req, res) {
        const greetingMessage =greeting.getHello(req.body);
        res.send(greetingMessage);
    }

    /**
    * @description a function to edit the greeting
    * @param {object} req
    * @param {object} res
    */
    async editGreeting(req, res) {
        try {
            const greetingMessage =await greeting.editGreeting(req);
            res.send(greetingMessage);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    /**
    * @description a function to delete the greeting
    * @param {object} req
    * @param {object} res
    */
    delete(req, res) {
        const greetingMessage =greeting.getHello(req.body);
        res.send(greetingMessage);
    }

    /**
    * @description a function to delete the greeting by Id
    * @param {object} req
    * @param {object} res
    */
    async deleteGreeting(req, res) {
        try {
            const greetingMessage =await greeting.
                deleteGreeting(req.params.greetId);
            res.send(greetingMessage);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    
};
