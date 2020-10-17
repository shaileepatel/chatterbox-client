var RoomsView = {
  // select button with id addRoom
  $button: $('#addRoom'),
  $select: $('#rooms select'),

  initialize: function() {
    //create a listener for addRoom button
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    Rooms.readRooms();
  },

  // create a function for handling where the button is clicked.
  handleAddRoom: function() {
    //in that button, create a prompt which asks the user to input the text for new room.#addRoom
    var addRoom = prompt('Please enter room name: ');
    // figure out a way to add the new room text in the select dropdown.
    RoomsView.$select.append(RoomsView.optionTemplate({roomname: addRoom}));
    // maybe re-render the rooms.
  },

  renderRoom: function(room) {
    RoomsView.$select.append(RoomsView.optionTemplate({roomname: room}));
  },

  render: function(data) {
    // create a new set to store unique room names
    var uniqueRooms = new Set();
    for (var item of data.results) {
      // check if there is roomname in item and the value of roomname is not empty
      if (item['roomname']) {
        // check if each value is unique
        uniqueRooms.add(item['roomname']);
      }
    }
    // loop in uniqueRooms
    for (var room of uniqueRooms) {
      RoomsView.renderRoom(room);
    }
  },

  // temaplate for each room to add to select dropdown
  optionTemplate: _.template(`
  <option><%=roomname%></option>
`)

};
