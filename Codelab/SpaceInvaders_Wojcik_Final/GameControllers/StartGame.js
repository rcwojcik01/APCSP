
function startGame() {

    _count = 0;
    _wave = 0;
    createCanvas(1250, 650);
    _bg = color(200);
    noStroke();
    // creates the player
    _sprites.push(new Battleship(width/2, height - 25, 1));
    // creates the speed powerup
    _sprites.push(new Speed(width/2, 0, 3));

    createWave();
    
}