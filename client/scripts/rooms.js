var Rooms = {
  readRooms: function() {
    Parse.readAll((data) => {
      // console.log(data);
      // call render of view to display chats
      RoomsView.render(data);
    });
  },
  // create a function for handling where the button is clicked.
  add: function() {
    //in that button, create a prompt which asks the user to input the text for new room.#addRoom
    var addRoom = prompt('Please enter room name: ');
    // figure out a way to add the new room text in the select dropdown.
    RoomsView.$select.append(RoomsView.optionTemplate({roomname: addRoom}));
    // maybe re-render the rooms.
  }
};