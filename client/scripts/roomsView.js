var RoomsView = {
  // select button with id addRoom
  $button: $('#addRoom'),
  $select: $('#rooms select'),
  currentRoom: 'lobby',


  initialize: function() {
    //create a listener for addRoom button
    RoomsView.$button.on('click', Rooms.add);
    Rooms.readRooms();
    RoomsView.$select.on('change', function() {
      var value = $(this).val();
      RoomsView.currentRoom = value;
      console.log(value);
    });
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


