// importing db schema
const Greeting = require('../app/model/greetingModel');

// importing mail servie
const Mailer = require('./../lib/service/mailService');
const mailer = new Mailer();

/**
 * @description greeting service to manupulate greeting data
 * @return {object} message
 */
module.exports = class greetingService {
    /**
     * @description an function which returns Hello World message
     * @param {object} reqBody body of the request
     * @return {object} greeting message
     */
    getHello(reqBody) {
        let message;
        if (reqBody.firstName !== undefined && reqBody.lastName!== undefined) {
            if ( (reqBody.firstName instanceof String ||
                typeof reqBody.firstName === 'string' ) &&
                    (reqBody.lastName instanceof String ||
                        typeof reqBody.lastName === 'string' ) ) {
                message = 'Hello';
                let flag = true;
                if (reqBody.firstName !== '' ) {
                    message+=' '+reqBody.firstName;
                    flag=false;
                }
                if (reqBody.lastName !== '' ) {
                    message+=' '+reqBody.lastName;
                    flag=false;
                }
                if (flag) {
                    message+=' World';
                }
            } else {
                throw new Error('Please Enter Proper Name');
            }
        } else {
            message = 'Hello World';
        }

        return {'message': message};
    };

    /**
     * @description function to save greeting to repo
     * @param {object} reqBody body of the request
      */
    createGreeting(reqBody) {
        const message = this.getHello(reqBody).message;

        const greeting = new Greeting({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            message: message,
        });
        return greeting.save()
            .then((item) => {
                return item;
            })
            .catch((err) => {
                return err;
            });
    }

    /**
     * @description function to get greeting by Id
     * @param {string} id id of the greeting
     * @return {object} greeting
     */
    findOne(id) {
        return Greeting.findById(id)
            .then( (item) => {
                if (!item) {
                    return new Error('Greeting not found with id ' + id);
                }
                return item;
            }).catch( (err) => {
                return new Error('Greeting not found with id ' + id);
            });
    }

    /**
     * @description function to get greeting by Id
     * @return {object} array of greetings
     */
    findAll() {
        return Greeting.find()
            .then( (item) => {
                if (!item) {
                    return new Error('Greeting not found ');
                }
                return item;
            }).catch( (err) => {
                return new Error('Greeting not found with id ');
            });
    }


    /**
     * @description function to edit greeting by Id
     * @param {object} req request
     * @return {object} array of greetings
     */
    editGreeting(req) {
        const message = this.getHello(req.body);
        return Greeting.findByIdAndUpdate(req.params.greetId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            message: message.message,
        }, {new: true})
            .then( (item) => {
                if (!item) {
                    return new Error('Greeting not found ');
                }
                console.log(item);
                return item;
            }).catch( (err) => {
                console.log(err);
                return new Error('Greeting not found with id ');
            });
    }

    /**
     * @description function to delete greeting by Id
     * @param {string} id request
     * @return {object} array of greetings
     */
    deleteGreeting(id) {
        return Greeting.findByIdAndRemove(id)
            .then( (item) => {
                if (!item) {
                    return new Error('Greeting not found ');
                }
                console.log(item);
                return {'message': 'deleted successfully'};
            }).catch( (err) => {
                console.log(err);
                return new Error('Greeting not found with id ');
            });
    }
};

