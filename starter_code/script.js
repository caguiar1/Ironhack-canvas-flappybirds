window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // let canvas = document.getElementById("game-board"),
  //   context = canvas.getContext("2d");

  // make_base();

  // function make_base() {
  //   base_image = new Image();
  //   base_image.src = "images/bg.png";
  //   base_image.onload = function() {
  //     context.drawImage(base_image, 0, 0);
  //   };
  // }

  var canvas = document.getElementById('gametime');
  var context = canvas.getContext('2d');
  var image = new Image();

  image.onload = function() {
    var x = 0;
    var width = image.width;
    var min = 0-width;
    var step = 1;

    var loop = function() {
      context.drawImage(image, x, 0);
      context.drawImage(image, x + width, 0);
      x -= step;
      if (x < min) {
        x = 0;
      }
    };
    setInterval(loop, 1000 / 60);
  };

  image.src = 'images/bg.png';


  function startGame() {}
};
