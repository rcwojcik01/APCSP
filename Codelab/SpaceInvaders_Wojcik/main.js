
var _bg;
// var draggingCircle = false;
var _canFire = true;
var _speedIsTrue = false;
var _sprites = [];
var _start = true;

function setup() {
    createCanvas(1250, 650);
    _bg = color(200);
    noStroke();
    
    _sprites.push(new Battleship(width/2, height - 25, 1));
    _sprites.push(new Speed(width/2, height, 3));
    for(var i = 0; i < 2; i++) {
        _sprites.push(new RainDropShooter(random(0, width), random(-500, 0), 2));
        }
    for(var i = 0; i < 3; i++) {
        _sprites.push(new RainDropEnemy(random(0,width), random(-500, 0), 2));
        }
    for(var i = 0; i < 3; i++) {
        _sprites.push(new SineWaveEnemy(50, -100, 2));
                }
}

function draw() {
    background(_bg);
    
    for(var i = 0; i < _sprites.length; i++) {
        _sprites[i].control();
    }
}