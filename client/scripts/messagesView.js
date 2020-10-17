var MessagesView = {

  $chats: $('#chats'),
  // create variable for refreshChats button
  $refreshChats: $('#refreshChats'),

  initialize: function() {
    Messages.readMessages();
    MessagesView.$refreshChats.on('click', MessagesView.reRenderMessages);
  },



  reRenderMessages: function() {
    MessagesView.$chats.empty();
    Messages.readMessages();
  },

  renderMessage: function(message) {
    if (!message.text.includes('<script>') && !message.text.includes('src')) {
      var chat = MessageView.render(message);
      MessagesView.$chats.append(chat);
      //create a variable for divs with all the .username class.
      var $username = $('.username');
      $username.on('click', Friends.toggleStatus);
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