const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is a test comment"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Incredible!"
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Wow, great work everyone"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;