var canvas = document.getElementById("gc");
canvas.width = 1024;
canvas.height = 768;
var ctx = canvas.getContext("2d");
var fps = 60;

// Sprites stuff.
var sUrl = "./Sprites/";
var sprites = [
  sPlayer = "hotdoggy.gif",
];

// States
var states = { pressed: 1, released: 0, none: -1 }

// Events stuff
var keyboardCheck = {
  keyUp: {
    state: states.none,
  },
  keyDown: {
    state: states.none,
  },
  keyLeft: {
    state: states.none,
  },
  keyRight: {
    state: states.none,
  },
}

var pressedHandlers = function (evt) {
  switch (evt.keyCode) {
    case 37:
      keyboardCheck.keyLeft.state = states.pressed;
      break;
    case 38:
      keyboardCheck.keyUp.state = states.pressed;
      break;
    case 39:
      keyboardCheck.keyRight.state = states.pressed;
      break;
    case 40:
      keyboardCheck.keyDown.state = states.pressed;
      break;      
  }
}
document.addEventListener("keydown", pressedHandlers);

var releasedHandlers = function (evt) {
  switch (evt.keyCode) {
    case 37:
      keyboardCheck.keyLeft.state = states.released;
      break;
    case 38:
      keyboardCheck.keyUp.state = states.released;
      break;
    case 39:
      keyboardCheck.keyRight.state = states.released;
      break;
    case 40:
      keyboardCheck.keyDown.state = states.released;
      break;      
  }
}
document.addEventListener("keyup", releasedHandlers);

// Player Stuff
var player = {
  sprite: sprites[0],
  x: 50,
  y: 50,
  z: -1,
  speed: 5, 
  update: function () {
    // Testing up
    if (keyboardCheck.keyUp.state === states.pressed) {
      this.y -= this.speed;
    }
    // Testing down
    if (keyboardCheck.keyDown.state === states.pressed) {
      this.y += this.speed;
    }
    // Testing Left
    if (keyboardCheck.keyLeft.state === states.pressed) {
      this.x -= this.speed;
    }
    // Testing right
    if (keyboardCheck.keyRight.state === states.pressed) {
      this.x += this.speed;
    }

    // Draw itself
    this.draw();
  },
  draw: function () {
    var image = new Image();
    image.src = sUrl + this.sprite;

    ctx.drawImage(image, this.x, this.y);
  }
};

// Function that executes every frame.
var update = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function that updates each object update
var updateGame = function (scene) {
  update();
  player.update();
}

setInterval(updateGame, 1000 / fps);