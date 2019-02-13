const express = require('express');

module.exports = application => {
    // API Routes
    const router = express.Router();

    application.use('/api', router);

    // TO DO Routes
    const todo = require('../api/todo/service');
    todo.register(router, '/todos');
}
