// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);

(function() {
  console.log('starting your function');

  var milisecondsInHour = 60 * 60 * 60;
  var cx = "017312239661215396283:ro3gbwbzdeg";
  var key = "AIzaSyBErLFUTnJrntP3aS-RFo18Nt4WtqC_owI";
  var searchTerm = "random acts of kindness";
  var searchFunction = $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?key=' + key + "&cx=" + cx + "&q=" + searchTerm,
  }).success(function(data) {
    $.ajax({
      url: '/newsitem',
      type: 'POST'
    })
  });

  searchFunction();

  setInterval(searchFunction, milisecondsInHour);

})();