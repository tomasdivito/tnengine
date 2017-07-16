/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tnEventHandler = __webpack_require__(1);

var _tnEventHandler2 = _interopRequireDefault(_tnEventHandler);

var _spriteFactory = __webpack_require__(2);

var _spriteFactory2 = _interopRequireDefault(_spriteFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById("gc");
canvas.width = 1024;
canvas.height = 768;
var ctx = canvas.getContext("2d");
var fps = 60;

// Player Stuff
var player = {
  sprite: new _spriteFactory2.default.Sprite("./Sprites/sPlayer.png"),
  x: 50,
  y: 50,
  z: -1,
  speed: 5,
  update: function update() {
    // Testing up
    if (_tnEventHandler2.default.keyboardCheck.keyUp.state === _tnEventHandler2.default.states.pressed) {
      this.y -= this.speed;
    }
    // Testing down
    if (_tnEventHandler2.default.keyboardCheck.keyDown.state === _tnEventHandler2.default.states.pressed) {
      this.y += this.speed;
    }
    // Testing Left
    if (_tnEventHandler2.default.keyboardCheck.keyLeft.state === _tnEventHandler2.default.states.pressed) {
      this.x -= this.speed;
    }
    // Testing right
    if (_tnEventHandler2.default.keyboardCheck.keyRight.state === _tnEventHandler2.default.states.pressed) {
      this.x += this.speed;
    }

    // Draw itself
    this.draw();
  },
  draw: function draw() {
    ctx.drawImage(this.sprite.sprite, this.x, this.y);
  }
};

// Function that executes every frame.
var update = function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Function that updates each object update
var updateGame = function updateGame(scene) {
  update();
  player.update();
};

setInterval(updateGame, 1000 / fps);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Events handlers for engine.
// Handles the events from Keyboard to be used
// In the games.

// TODO(tomasdivito): Add a way to come back to state `none`
// that would be the non pressed neither released state of the
// key, maybe just releasing should say `it was released` and
// then go back to the `none` state.
var states = { pressed: 1, released: 0, none: -1 };

var keyboardCheck = {
  keyUp: {
    state: states.none
  },
  keyDown: {
    state: states.none
  },
  keyLeft: {
    state: states.none
  },
  keyRight: {
    state: states.none
  }
};

var pressedHandlers = function pressedHandlers(event) {
  switch (event.keyCode) {
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
};
document.addEventListener("keydown", pressedHandlers);

var releasedHandlers = function releasedHandlers(event) {
  switch (event.keyCode) {
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
};
document.addEventListener("keyup", releasedHandlers);

module.exports = {
  keyboardCheck: keyboardCheck,
  states: states
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var spritesPipeline = {};

var Sprite = function Sprite(url) {
  var image = new Image();
  image.src = url;

  this.sprite = image;
  this.name = name;
};

module.exports = {
  Sprite: Sprite
};

/***/ })
/******/ ]);