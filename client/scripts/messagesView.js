/*
Purpose: gather the data from messages.js and render messageView.js

go to messages.js

add renderMessage function:


*/
var MessagesView = {

  $chats: $('#chats'),
  // create variable for refreshChats button
  $refreshChats: $('#refreshChats'),

  // in initialize function, call parse.readAll. Pass in the callback. within the callback, call renderwiththe data that we got

  // pass a similar parse.readAll function in the initialize method.
  //whatever data we get from that, we pass it to message variable created.
  //then we call render.


  initialize: function() {
    // make ajax call to get all messages from the model
    Messages.readMessages();
    //
    MessagesView.$refreshChats.on('click', MessagesView.reRenderMessages);
  },

  reRenderMessages: function() {
    MessagesView.$chats.empty();
    Messages.readMessages();
  },

  //create a render message methodand takes in message object as the input
  renderMessage: function(message) {
    if (!message.text.includes('<script>') && !message.text.includes('src')) {
      var chat = MessageView.render(message);
      MessagesView.$chats.append(chat);
    }
  },

  render: function(data) {
    for (var item of data.results) {
      if ('username' in item) {
        MessagesView.renderMessage(item);
      }
    }
  }
};