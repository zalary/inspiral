//Set up colors array to randomize circles
var colors = ['#FF6600', '#FF944D', '#FF7519', '#FF4719', '#FF6600', '#E68A00', '#FF4719', '#FF4719', '#E65C00', '#FF3300'];
  var radius, randomNum, circle, position;
  var numberCircles = 50;
  var radius = 50;

  //Add middle circle to page
  var originalCircle = new Path.Circle({
      center: view.center,
      radius: 50,
      fillColor: 'red'
    });

  //Add concentric circles with random radii and fill colors
  for (var i = 0; i <= numberCircles; i++) {
      position = view.center;
      radius += Math.round(Math.random() * 20);
      circle = new Path.Circle(new Point(position), radius);
      randomNum = Math.round(Math.random() * 10);
      circle.fillColor = colors[randomNum];
      circle.sendToBack();
    };

  //On each frame event, increment fill color hue by 1
  function onFrame(event) {
      randomNum = Math.round(Math.random() * 10);
      originalCircle.fillColor.hue += 1;
  };
