import events from "./tnEventHandler"
import sFactory from "./spriteFactory"

let canvas = document.getElementById("gc");
canvas.width = 1024;
canvas.height = 768;
let ctx = canvas.getContext("2d");
let fps = 60;

// Player Stuff
let player = {
  sprite: new sFactory.Sprite("../Sprites/sPlayer.png"),
  x: 50,
  y: 50,
  z: -1,
  speed: 5, 
  update: function () {
    // Testing up
    if (events.keyboardCheck.keyUp.state === events.states.pressed) {
      this.y -= this.speed;
    }
    // Testing down
    if (events.keyboardCheck.keyDown.state === events.states.pressed) {
      this.y += this.speed;
    }
    // Testing Left
    if (events.keyboardCheck.keyLeft.state === events.states.pressed) {
      this.x -= this.speed;
    }
    // Testing right
    if (events.keyboardCheck.keyRight.state === events.states.pressed) {
      this.x += this.speed;
    }

    // Draw itself
    this.draw();
  },
  draw: function () {
    ctx.drawImage(this.sprite.sprite, this.x, this.y);
  }
};

// Function that executes every frame.
let update = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function that updates each object update
let updateGame = function (scene) {
  update();
  player.update();
}

setInterval(updateGame, 1000 / fps);