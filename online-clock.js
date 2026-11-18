'use strict';
// Online simulation and transport must keep running when the host tab is hidden.
// Rendering continues separately through requestAnimationFrame in game.js.
setInterval(() => postMessage(null), 16);
