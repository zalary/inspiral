(function() {
  $('#nav-wrapper').height($("#nav").height());

  // $('#nav').affix({
  //     offset: { top: $('#nav').offset().top() }
  // });

  $('a.inspire_link').click(function(e){
    e.preventDefault();
    var inspiration_id = 1;
    var dataString = "inspiration_id=1&pinned_by=1&pinned_from=2";
    $.ajax({
      type: "POST",
      url: "/story/create",
      data: dataString,
      success: function() {

      }
    });
  });
})();

$(document).ready(function() {
  // create an array of background papers
  var backgroundPapers = [];
  backgroundPapers[0] = "/images/papers/farmer.png";
  backgroundPapers[1] = "/images/papers/foil.png";
  backgroundPapers[2] = "/images/papers/lined.png";
  backgroundPapers[3] = "/images/papers/paper.png";
  backgroundPapers[4] = "/images/papers/ricepaper2.png";
  backgroundPapers[5] = "/images/papers/paper3.png";
  backgroundPapers[6] = "/images/papers/textured.png";
  backgroundPapers[7] = "/images/papers/paperboard.png";

  // iterate through Dashboard and randomly assign width, height, background
  for (var i = 1; i <= $('div#notdone div.inspiration-item').length; i++){
    var width = Math.floor((Math.random()*100))+75;
    var height = Math.floor((Math.random()*100))+75;
    var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random()*8)];
    $('div#notdone div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
  };
  for (var i = 1; i <= $('div#done div.inspiration-item').length; i++){
    var width = Math.floor((Math.random()*100))+75;
    var height = Math.floor((Math.random()*100))+75;
    var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random()*8)];
    $('div#done div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
  }

  // iterate through Feed and randomly assign width, height, background
  for (var i = 1; i <= $('div#inspiration-feed div.inspiration-item').length; i++){
    var width = Math.floor((Math.random()*100))+75;
    var height = Math.floor((Math.random()*100))+75;
    var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random()*8)];
    $('div#inspiration-feed div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
  }

  // Attach Masonry using jQuery
  // for the to-do list
  (function() {
    $('div#inspiration-todo-list div#notdone').masonry({
      // options
      itemSelector: '.inspiration-item'
    });
  })();
    // and for the done list
  (function() {
    $('div#inspiration-todo-list div#done').masonry({
      // options
      itemSelector: '.inspiration-item'
    });
  })();
  // and for the feed
  (function() {
    $('div#inspiration-feed').masonry({
      // options
      itemSelector: '.inspiration-item'
    });
  })();
});
