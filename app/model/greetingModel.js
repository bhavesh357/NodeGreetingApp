const mongoose= require('mongoose');

// eslint-disable-next-line new-cap
const GreetingSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [false, ''],
    },
    lastName: {
        type: String,
        required: [false, ''],
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Greeting', GreetingSchema);
