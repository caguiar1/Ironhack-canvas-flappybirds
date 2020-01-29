let time;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  
  


  // ------------------------ STARTS THE GAME ------------------------ //


  function startGame() {
    
class Flappy {
    constructor() {
      this.x = 200;
      this.y = 200;
      this.width = 50;
      this.height = 50;
      this.img = new Image();
      this.img.src = "./images/flappy.png";
    }
    draw() {
      this.y += 3;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
 
  }
  let flappy = new Flappy();

  flappy.draw();
    
    
    
    let faby = {
      x: 250,
      y: 205,
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

    
    

    // function draw(faby) {
    //   let img = new Image();
    //   img.onload = function() { 
    //      ctx.drawImage(img, faby.x, faby.y, 500, 350); 
    //   }
    //   img.src = "images/flappy.png";
    // }
    
    
    
    // ------------------------ SCROLLING IMAGE ------------------------ //

    
    let img = new Image();
    img.src = 'images/bg.png';
    
    
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
      
      // draw(faby)
    }
    
    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;



    
    //------------------------ GRAVITY ------------------------ //
    
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
  }
  
  
  
  
  
  
};
