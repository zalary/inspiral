(function() {
  $('#nav-wrapper').height($("#nav").height());

  $('a.inspire_link').click(function(e) {
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

(function() {
  // create an array of background papers
  var backgroundPapers = [];
  backgroundPapers[0] = "/images/bgs/dust.png";
  backgroundPapers[1] = "/images/bgs/food.png";
  backgroundPapers[2] = "/images/bgs/pentagon.png";
  backgroundPapers[3] = "/images/bgs/wood.png";

  var random = function(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  };

  var random_background = function() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  var layout = function() {
    $(".item").each(function() {
      $(this).removeClass("col-1 col-2 col-3 col-4");
      $(this).addClass("col-" + random(1, 4));
      $(this).css("background-color", random_background());
    });
    $("#items").isotope({
      layoutMode: "masonry",
      masonry: {
        columnWidth: 50
      },
      cellsByRow: {
        columnWidth: 50,
        rowHeight: 50
      }
    });
  };

  $(document).on("click", ".inspiration-item", function() {
    $(".item").not(this).each(function(index) {
      $(this).removeClass("col-1 col-2 col-3 col-4");
      $(this).css({
        webkitTransform: "translate(850px, " + (index * 50) + "px)",
        width: 40,
        height: 40,
        zIndex: 1
      });
    });
    $(this).css({
      webkitTransform: "translate(0,0)",
      width: 840,
      height: 800,
      zIndex: 2
    });
  });









  // iterate through Dashboard and randomly assign width, height, background
  // for the todo dashboard column
  (function() {
    for (var i = 1; i <= $('#notdone div.inspiration-item').length; i++) {
      var width = Math.floor((Math.random() * 75)) + 75;
      var height = Math.floor((Math.random() * 75)) + 75;
      var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random() * backgroundPapers.length)];
      $('#notdone div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
    };
  })();
  // // and the done dashboard column
  // (function() {
  //   for (var i = 1; i <= $('#done div.inspiration-item').length; i++) {
  //     var width = Math.floor((Math.random() * 75)) + 75;
  //     var height = Math.floor((Math.random() * 75)) + 75;
  //     var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random() * backgroundPapers.length)];
  //     $('#done div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
  //   };
  // })();
  // // iterate through Feed and randomly assign width, height, background
  // (function() {
  //   for (var i = 1; i <= $('#inspiration-feed div.inspiration-item').length; i++) {
  //     var width = Math.floor((Math.random() * 75)) + 75;
  //     var height = Math.floor((Math.random() * 75)) + 75;
  //     var backgroundPaperUrl = backgroundPapers[Math.floor(Math.random() * backgroundPapers.length)];
  //     $('#inspiration-feed div.inspiration-item:nth-child(' + i + ')').css("width", width).css("height", height).css("background-image", 'url("' + backgroundPaperUrl + '")').css("opacity", .85);
  //   };
  // })();
})();