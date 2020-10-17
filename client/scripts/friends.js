/*
create a listener for all usernames on screen.
When click on certain username, highlight the text from that username.

*/
var Friends = {

  readFriends: function() {
    Parse.readAll((data) => {
      MessagesView.render(data);
    });
  },
  toggleStatus: function(event) {
    // make a variable and store event.target as a jquery element. event.target will have the dom element that was clicked
    var $selectedDiv = $(event.target);
    // this will give the clicked username
    var $selectedUsername = $selectedDiv.text();
    // change the color of the chat of the selected username
    var $chatContent = $selectedDiv.next();
    // $chatContent.css('color', 'red');
    $chatContent.toggleClass('red');
  },
};

// $(".place").click(function () {
//   $(this).toggleClass("green");
// });