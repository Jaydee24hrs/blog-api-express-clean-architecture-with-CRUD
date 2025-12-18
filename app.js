const express = require('express');
const postRoutes = require('./src/routes/post.routes');

const app = express();
app.use(express.json());
app.use('/api/posts', postRoutes);

module.exports = app;