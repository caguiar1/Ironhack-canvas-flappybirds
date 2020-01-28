let time;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  
  function startGame() {

    
    
    let faby = {
      x: 25,
      y: 25,
      width: 10,
      height: 10,
      speedX: 10,
      speedY: 10,
      gravity: 0.05,
      gravitySpeed: 0.5,
      update: () => {
        
      },
      newPos: () => {
        update();
      }
      
    }
    
    

    function draw(faby) {
      let img = new Image();
      img.onload = function() {
        ctx.drawImage(img, faby.x, faby.y, 50, 50);
      }
      img.src = "images/flappy.png";
    }
    
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 32: faby.gravity = -3;    console.log('up',    faby);
        console.log('SET GRAVITY')
        
        timeGravity();
        break;
    
      }
      function timeGravity(){
        time = setTimeout(gravTimeReset, 50);
      }
      function gravTimeReset(){
        faby.gravity = 0.05
        console.log('RESET GRAVITY')
      }

      // updateCanvas();
    }




    let img = new Image();
    img.src = 'images/bg.png';
    
    let canvas = document.getElementById('gametime');
    let ctx = canvas.getContext('2d');
    
    let backgroundImage = {
      img: img,
      x: 0,
      speed: -1,
    
      move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
      },
    
      draw: function() {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
      },
    };
    
    function updateCanvas() {
      backgroundImage.move();
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();
    
      requestAnimationFrame(updateCanvas);

      draw(faby)
    }
    
    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;

  }








};
