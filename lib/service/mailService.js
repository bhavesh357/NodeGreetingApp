const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports = class MailService {
    /**
     * @description a function to send email
     * @param {string} text to be sent
     */
    sendMail(text) {
        console.log(process.env.EMAIL_ID);
        console.log(process.env.EMAIL_PASSWORD);
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD,
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
