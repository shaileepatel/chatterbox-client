/*
Purpose: gather the data from messages.js and render messageView.js

go to messages.js

add renderMessage function:


*/
var MessagesView = {

  $chats: $('#chats'),
  // in initialize function, call parse.readAll. Pass in the callback. within the callback, call renderwiththe data that we got

  // pass a similar parse.readAll function in the initialize method.
  //whatever data we get from that, we pass it to message variable created.
  //then we call render.


  initialize: function() {
    Parse.readAll((data) => {
      console.log(data);
      this.render(data);
    });
  },

  //create a render message methodand takes in message object as the input
  renderMessage: function(message) {
  //assign _.template call
  // pass in the message object messageview.render to a variable
  // call that variable and pass in
  },
  // add children to the elements to $chat
  //render message view

  render: function(data) {
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