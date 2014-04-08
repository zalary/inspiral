/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */

(function(io) {

  // as soon as this file is loaded, connect automatically,
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {

    // Listen for Comet messages from Sails
    // socket.on('message', function messageReceived(message) {
    console.log("This is from the connect: ", this.socket.sessionid);

    ///////////////////////////////////////////////////////////
    // Replace the following with your own custom logic
    // to run when a new message arrives from the Sails.js
    // server.
    ///////////////////////////////////////////////////////////
    //log('New comet message received :: ', message);
    //////////////////////////////////////////////////////

    // Listen for the socket 'message'
    socket.on('message', inspirationReceivedFromServer);

    // Subscribe to the user model classroom and instance room
    socket.get('/inspiration/subscribe');

    ///////////////////////////////////////////////////////////
    // Here's where you'll want to add any custom logic for
    // when the browser establishes its socket connection to
    // the Sails.js server.
    ///////////////////////////////////////////////////////////
    log(
      'Socket is now connected and globally accessible as `socket`.\n' +
      'e.g. to send a GET request to Sails, try \n' +
      '`socket.get("/", function (response) ' +
      '{ console.log(response); })`'
    );
    ///////////////////////////////////////////////////////////

  });

  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;

  // Simple log function to keep the example simple
  function log() {
    //   if (typeof console !== 'undefined') {
    //     console.log.apply(console, arguments);
    //   }
  }

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);

function inspirationReceivedFromServer(message) {
  // This message has to do with the User Model
  var inspirationId = message.id;
  updateInspirationInDom(message);
}


function updateInspirationInDom(message) {
  //Check what page we're on
  var page = document.location.pathname;
  page = page.replace(/(\/)$/, '');
  if (page == '/inspiration/feed' && message.verb == 'create') {
    InspirationIndexPage.addInspiration(message);
  }

}
// break;
// }


var InspirationIndexPage = {


  addInspiration: function(inspiration) {

    var obj = {
      inspiration: inspiration.data,
      _csrf: window.csrf || ''
    };
    // $('#newest-inspirations').prepend(
    //   JST['assets/linker/templates/addInspiration.ejs'](obj)
    //   );


    $container = $('#inspiration-feed');

    $container
      .prepend(JST['assets/linker/templates/addInspiration.ejs'](obj))
      .masonry('prepended', $container);
    // (function() {$container.masonry({itemSelector: ".inspiration-item"});})();
    setTimeout(function() {
      $container.masonry({
        itemSelector: '.inspiration-item'
      })
    }, 2000);

    // $('div#inspiration-feed').masonry('prepended',
    //   $('<div class="inspiration-item"><div class="inspiration-text">'+ inspiration.text + '</div><div class="inspiration-user">' + inspiration.user + '</div></div>')
    //   )
  }
};
