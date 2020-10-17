/*
Purpose:collect data and we can use "get" method to collect the data.

IOCE:I: O: C: E:

create a method. "read messages" method. Go in the message view can call that method.a

readMessages method:gets all of the messages using the AJAX function
once we get object, look into array for each element's text property.a

*/
var Messages = {

  readMessages: function() {
    Parse.readAll((data) => {
      // console.log(data);
      // call render of view to display chats
      MessagesView.render(data);
    });
  }
};

