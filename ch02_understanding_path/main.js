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
//context.lineTo(150, 250);
//context.lineTo(250, 170);
//context.lineTo(320, 280);
//context.closePath();
//context.stroke();
//context.fillText("(50, 50)", 30, 40);
//context.fillText("(150, 250)", 130, 260);
//context.fillText("(250, 170)", 255, 175);
//context.fillText("(320, 280)", 325, 285);

//context.fill()

context.bezierCurveTo(0, 0, 80, 250, 150, 250);
context.bezierCurveTo(250, 250, 250, 250, 250, 170);
context.bezierCurveTo(250, 50, 400, 350, 320, 280);

context.closePath();
// context.fill();
context.stroke();

context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);
context.fillText("(320, 280)", 320, 300);

// context.beginPath();
// context.moveTo(50, 250);
// context.lineTo(50, 350);
// context.lineTo(150, 350);
// context.closePath();
// context.moveTo(230, 360);
// context.lineTo(270, 360);
// context.lineTo(270, 310);
// context.closePath();
// context.moveTo(250, 50);
// context.lineTo(370, 50);
// context.lineTo(370, 100);
// context.closePath();

// context.strokeStyle = "#FFFF00";
// context.fillStyle = "#000000";
// context.fill();
// context.stroke();

context.beginPath();
context.moveTo(50, 250);
context.quadraticCurveTo(25, 300, 50, 350);
context.quadraticCurveTo(100, 375, 150, 350);
context.closePath();
context.moveTo(230, 360);
context.quadraticCurveTo(255, 340, 270, 360);
context.quadraticCurveTo(255, 340, 270, 310);
context.closePath();
context.moveTo(250, 50);
context.quadraticCurveTo(310, 60, 370, 50);
context.quadraticCurveTo(400, 75, 370, 100);
context.closePath();

context.strokeStyle = "#FFFF00";
context.fillStyle = "#000000";
context.fill();
context.stroke();
