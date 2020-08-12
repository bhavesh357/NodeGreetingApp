const nodemailer = require('nodemailer');

module.exports = class MailService {
    /**
     * @description a function to send email
     * @param {string} text to be sent
     */
    sendMail(text) {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bk357357@gmail.com',
                pass: 'ej323571996',
            },
        });

        const message = {
            from: 'bk357357@gmail.com', // Sender address
            to: 'bkadam357@gmail.com', // List of recipients
            subject: 'Testing Email', // Subject line
            text: text, // Plain text body
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }
};
