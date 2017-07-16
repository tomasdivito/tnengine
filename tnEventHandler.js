// Events handlers for engine.
// Handles the events from Keyboard to be used
// In the games.

// TODO(tomasdivito): Add a way to come back to state `none`
// that would be the non pressed neither released state of the
// key, maybe just releasing should say `it was released` and
// then go back to the `none` state.
let states = { pressed: 1, released: 0, none: -1 }

let keyboardCheck = {
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


let pressedHandlers = function (event) {
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
}
document.addEventListener("keydown", pressedHandlers);

let releasedHandlers = function (event) {
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
}
document.addEventListener("keyup", releasedHandlers);

module.exports = {
  keyboardCheck: keyboardCheck,
  states: states,
};