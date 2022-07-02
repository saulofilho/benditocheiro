var c = document.getElementById("canvas-screen");
var $ = c.getContext("2d");

var col = function (x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1, 1);
};
var R = function (x, y, t) {
  return Math.floor(150 + 64 * Math.cos((x * x - y * y) / 1000 + t));
};

var G = function (x, y, t) {
  return Math.floor(150 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 1000));
};

var B = function (x, y, t) {
  return Math.floor(150 + 64 * Math.sin(3 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
};

var t = 0;

var run = function () {
  for (x = 0; x <= 55; x++) {
    for (y = 0; y <= 55; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.05;
  window.requestAnimationFrame(run);
};

run();


// https://stackoverflow.com/questions/69480486/gatsby-site-script-not-available-on-first-page-request-with-helmet
