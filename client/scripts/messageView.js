/*
purpose: template for each message. need to figure out how to get the username class onto the message and the message should display in the div below that.
*/
var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=text%></div>
      </div>
    `)

};

// var temp = _.template(`
// <div class="chat">
//   <div class="username"><%=user%></div>
//   <div></div>
// </div>
// `);
// temp({user: "shailee"})
