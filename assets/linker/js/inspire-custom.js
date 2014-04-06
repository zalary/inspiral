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
  backgroundPapers[0] = "/public/images/farmer.png";
  backgroundPapers[1] = "/public/images/foil.png";
  backgroundPapers[2] = "/public/images/lined_paper.png";
  backgroundPapers[3] = "/public/images/paper.png";
  backgroundPapers[4] = "/public/images/ricepaper2.png";
  backgroundPapers[5] = "/public/images/stardust.png";
  backgroundPapers[6] = "/public/images/textured_paper.png";
  backgroundPapers[7] = "/public/images/white_paperboard.png";

  // iterate through divs and randomly assign width and height
  for (var i = 0; i < $('div#notdone div.inspiration-item').length; i++){
    var width = Math.floor((Math.random()*100))+100;
    var height = Math.floor((Math.random()*100))+100;
    var backgroundPaperUrl = Math.floor((Math.random()*100)) + 100;
    $('div#notdone div:nth-child(' + i + ')').css("width", width).css("height", height);
  };
  for (var i = 0; i < $('div#done div.inspiration-item').length; i++){
    var width = Math.floor((Math.random()*100))+100;
    var height = Math.floor((Math.random()*100))+100;
    $('div#done div:nth-child(' + i + ')').css("width", width).css("height", height);
  }




  // Initialize a Masonry Instance using jQuery
  // for the to-do list
  $('#inspiration-todo-list div#notdone').masonry({
    // options
    columnWidth: 200,
    gutter: 10,
    itemSelector: '.inspiration-item'
  });
  // and a seperate instance for the done list
  $('#inspiration-todo-list div#done').masonry({
    // options
    columnWidth: 200,
    gutter: 10,
    itemSelector: '.inspiration-item'
  });
});
