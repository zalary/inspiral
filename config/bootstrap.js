/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports = {
  appName: 'Inspiral'
}

module.exports.bootstrap = function(cb) {

  var milisecondsInHour = 3600000;
  var searchFunction = function() {
    var cx = "017312239661215396283:ro3gbwbzdeg";
    var key = "AIzaSyBErLFUTnJrntP3aS-RFo18Nt4WtqC_owI";
    var searchTerm = "random%20acts%20of%20kindness";
    var url = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + searchTerm;

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);

    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var data = JSON.parse(xmlHttp.responseText);
        NewsItem.parse(data);
      };
    };

    xmlHttp.send();
  }

  searchFunction();

  setInterval(searchFunction, milisecondsInHour);

  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};