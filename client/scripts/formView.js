var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // create a message that will be submitted via the form
    var message = {
      // will get this username from app.js
      username: App.username,
      // get the text from form input
      text: $('#message').val(),
      // hardcode roomname for now
      roomname: RoomsView.currentRoom,
    };
    // use parse.create to create new message
    Parse.create(message);
    // clear the input box after the message is submitted
    $('#message').val('');
    // call reRenderMessages to load all the newely added messages
    MessagesView.reRenderMessages();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };