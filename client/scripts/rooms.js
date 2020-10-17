var Rooms = {
  readRooms: function() {
    Parse.readAll((data) => {
      // console.log(data);
      // call render of view to display chats
      RoomsView.render(data);
    });
  }

};