const express = require('express');
const indexRouter = express.Router();
const messages = require('../data/messagesData');
const messagesRouter = require('./messages.routes');
const usersRouter = require('./users.routes');

indexRouter.use('/', messagesRouter);

module.exports = indexRouter;
