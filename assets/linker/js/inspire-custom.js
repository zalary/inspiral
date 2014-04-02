(function() {
  $('#nav-wrapper').height($("#nav").height());

  // $('#nav').affix({
  //     offset: { top: $('#nav').offset().top() }
  // });

  $('a.inspire_link').click(function(e){
  e.preventDefault();
  alert('hey ho');
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
