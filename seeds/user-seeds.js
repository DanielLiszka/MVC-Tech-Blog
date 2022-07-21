const { User } = require('../models');

const userData = [
    {
        username: "Test Username 1",
        email: "Test_Username_1@gmail.com",
        password: "password1!"
    },
    {
        username: "Test Username 2",
        email: "Test_Username_2@gmail.com",
        password: "password2!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;