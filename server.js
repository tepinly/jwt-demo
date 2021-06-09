const express = require('express');
const app = express();

const posts = [
    {
        username: 'John',
        title: 'Post 1'
    },
    {
        username: 'Doe',
        title: 'Post 2'
    },
    {
        username: 'Alex',
        title: 'Post 3'
    },
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.listen(3000)