var canvas = document.getElementById("asteroids");
var context = canvas.getContext("2d");

draw_grid(context);
// draw_grid(context, 15, 45, 'red', 'yellow');
// draw_grid(context, 5, 30, 'white', 'yellow');

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#00FF00";
context.lineWidth = 2;
context.moveTo(50, 50);
context.lineTo(150, 250);
context.lineTo(250, 170);
context.lineTo(320, 280);
context.closePath()
context.stroke()
context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);
context.fillText("(320, 280)", 325, 285);

//context.fill()