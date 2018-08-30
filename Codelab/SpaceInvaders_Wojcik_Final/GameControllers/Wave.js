
function createWave() {
    
    _wave++;
    _count = 0;
    
    for(var i = 0; i < (_wave*2); i++) {
        _sprites.push(new RainDropShooter(random(0, width), random(-500, 0), 2));
        }
    // creates the Raindrop Enemy
    for(var i = 0; i < _wave * 3; i++) {
        _sprites.push(new RainDropEnemy(random(0,width), random(-500, 0), 2));
        }
    // creates the SinWave Enemy
    for(var i = 0; i < _wave * 3; i++) {
        _sprites.push(new SineWaveEnemy(50, -100, 2));
        }
    
}

function checkCount() {
    if(_count <= 0) {
        createWave();
    }
}