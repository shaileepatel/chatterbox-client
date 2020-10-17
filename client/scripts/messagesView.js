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
    // delete all the messages before rendering new messages to avoid duplication
    MessagesView.$chats.empty();
    // call the readMessages function again that will get all the data via parse.readall
    Messages.readMessages();
  },

  //create a render message methodand takes in message object as the input
  renderMessage: function(message) {
    // remove script and img attacks
    if (!message.text.includes('<script>') && !message.text.includes('src')) {
      var chat = MessageView.render(message);
      MessagesView.$chats.append(chat);
      // console.log(chat);
      // MessagesView.$chats.append(MessagesView.render());
      //assign _.template call
      // pass in the message object messageview.render to a variable
      // call that variable and pass in
    }
  },

  render: function(data) {
    for (var item of data.results) {
      if ('username' in item) {
        MessagesView.renderMessage(item);
      }
    }
    // render the messages viewtemplate.
    // render will loop through data and call renderMessage on each one.
  }
};

/*
var a = _.template( html includes class "chat" elements, and includes class "username"...);
a({chat: 'hello', username: 'shailee'})
template:<% = chat hello %><%= username shailee %>
<div class="chat"><%=name%></div>
*/