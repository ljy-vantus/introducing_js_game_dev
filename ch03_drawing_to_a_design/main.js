var context = document.getElementById("pacmania").getContext("2d");
draw_grid(context);

var min_radius = 5;
var max_radius = 50;

do {
  let x = context.canvas.width * Math.random();
  let y = context.canvas.height * Math.random();
  let radius = min_radius + (max_radius - min_radius) * Math.random();
  draw_pacman(context, x, y, radius, 0.3 * Math.random());
} while (Math.random() < 0.9);
