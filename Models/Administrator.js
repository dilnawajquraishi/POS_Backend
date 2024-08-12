let mongoose = require('mongoose');

let administrator=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
        default: 'default-profile-pic.jpg', // Optional default image
    },
    password: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    confirmpassword: {
        type: String,
    }
});

module.exports = mongoose.model('usercollection', usermodel);
