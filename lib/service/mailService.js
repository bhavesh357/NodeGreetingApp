const nodemailer = require('nodemailer');
require('dotenv').config();

const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
* @description a function to send email
* @param {string} text to be sent
*/
function sendMail(textMessage,fromId,toId,subjectText) {
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
        html: getTemplate(textMessage), // Plain text body
    };
    
    transport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

function getTemplate(textMessage){
    return "<h1>"+textMessage+"</h1>";
}

emitter.on('notify',(textMessage,fromId,toId,subjectText) => {
    sendMail(textMessage,fromId,toId,subjectText);
})

exports.emitter=emitter;

