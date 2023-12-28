const express = require('express');
const messages = require('../data/messagesData');
const messagesRouter = express.Router();
const os = require('os');

/* GET messages home page. */
messagesRouter.get('/', (req, res, next) => {
  const hostName = os.hostname();
  console.log(`hostName: `, hostName);
  res.render('index', {
    title: 'Mini MessageBoard',
    messages: messages,
    link: 'http://localhost:3001/form',
  });
});

messagesRouter.get('/form', (req, res, next) => {
  res.render('form', {
    title: 'My Form',
    messageUser: '',
    messageText: '',
  });
});

messagesRouter.post('/new', (req, res, next) => {
  console.log(`req.body: `, req.body);
  const { messageUser, messageText } = req.body;
  messages.push({
    id: messages.length + 1,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect('/');
});
module.exports = messagesRouter;
