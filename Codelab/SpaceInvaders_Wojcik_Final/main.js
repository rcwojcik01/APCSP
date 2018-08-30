
var _bg;
// var draggingCircle = false;
var _canFire = true;
var _speedIsTrue = false;
var _sprites = [];
var _count = 0;
var _wave = 0;

function setup() {
  startGame();
}

function draw() {
    background(_bg);
    
    for(var i = 0; i < _sprites.length; i++) {
        _sprites[i].control();
    }
}