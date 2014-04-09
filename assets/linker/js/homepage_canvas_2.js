var leftPath, rightPath, newCircles;

        var x = 0;
        var y = 250;
        var i = 720;
        var j = 250;
        var radius = 10;

        function onFrame(event) {

          if (event.count % 5 == 0) {

            if (x == 0) {
              leftPath = new Path();
              rightPath = new Path();
              leftPath.strokeColor = '#FF6600';
              rightPath.strokeColor = '#FF6600';
              leftPath.strokeWidth = 10;
              rightPath.strokeWidth = 10;
            }

            leftPath.add(new Point(x, y));
            if (x < 360) {
              x += 5;
            }

            rightPath.add(new Point(i, j));
            if (i > 360) {
              i -= 5;
            }

            if (x == 360) {
              var explodingCircle = new Path.Circle(new Point(360, 250), 10);
              explodingCircle.fillColor = '#428bca';
              explodingCircle.sendToBack();

             if (radius <= 190) {
              newCircles = new Path.Circle(new Point(360, 250), radius);
              newCircles.fillColor = '#428bca';
              newCircles.sendToBack();
              radius += 10;
            }
              if (radius == 200) {
                project.activeLayer.removeChildren();
                x = 0;
                y = 250;
                i = 720;
                j = 250;
                radius = 10;
              }
            }
          }
        }
