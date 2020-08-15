const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports = class MailService {
    /**
     * @description a function to send email
     * @param {string} text to be sent
     */
    sendMail(textMessage,fromId,toId,subjectText) {
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
            from: fromId, // Sender address
            to: toId, // List of recipients
            subject: subjectText, // Subject line
            html: this.getTemplate(textMessage), // Plain text body
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }

    getTemplate(textMessage){
        return "<h1>"+textMessage+"</h1>";
    }
};
