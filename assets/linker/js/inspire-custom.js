WebFontConfig = {
  google: {
    families: ['Lora:400,700,400italic,700italic:latin']['Montserrat:400,700:latin']['Lato:400,900:latin']
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

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
