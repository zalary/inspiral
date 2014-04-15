var leftPath, rightPath, newCircles, randomNum;

//Set up colors array to randomize circles
var colors = ['#143B7F', '#74A6FF', '#2876FF', '#3A537F', '#205ECC'];

var x = 50;
var y = 250;
var i = 850;
var j = 250;
var radius = 10;

function onFrame(event) {

  //Every fifth frame event, evaluate
  if (event.count % 5 == 0) {

    //The first time, instantiate new paths
    if (x == 50) {
      leftPath = new Path();
      rightPath = new Path();
      leftPath.strokeColor = '#FF6600';
      rightPath.strokeColor = '#FF6600';
      leftPath.strokeWidth = 5;
      rightPath.strokeWidth = 5;
    }

    //Logic for the line from the left
    leftPath.add(new Point(x, y));
    leftPath.smooth();
    if (x < 450) {
      x += 10;
      if (y === 250 || y === 220) {
        y += 30;
      } else {
        y -= 60;
      }
    }

    //Logic for the line from the right
    rightPath.add(new Point(i, j));
    rightPath.smooth();
    if (i > 450) {
      i -= 10;
      if (j === 250 || j == 220) {
        j += 30;
      } else {
        j -= 60;
      }
    }

    //Logic for circles spiralling out when paths touch in middle
    if (x == 450) {
      var explodingCircle = new Path.Circle(new Point(450, 250), 10);
      explodingCircle.fillColor = '#428bca';
      explodingCircle.sendToBack();

     if (radius <= 390) {
      newCircles = new Path.Circle(new Point(450, 250), radius);
      randomNum = Math.round(Math.random() * 5);
      newCircles.fillColor = colors[randomNum];
      newCircles.sendToBack();
      radius += 10;
    }
      //Clear project layers and reset variables to start over
      if (radius == 400) {
        project.activeLayer.removeChildren();
        x = 50;
        y = 250;
        i = 850;
        j = 250;
        radius = 10;
      }
    }
  }
}
