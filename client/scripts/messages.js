/*
Purpose:collect data and we can use "get" method to collect the data.

IOCE:I: O: C: E:

create a method. "read messages" method. Go in the message view can call that method.a

readMessages method:gets all of the messages using the AJAX function
once we get object, look into array for each element's text property.a

*/
var Messages = {

  readMessages: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfo.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received ' + data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
};

