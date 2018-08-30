function SineWaveEnemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 7;
    this.dx = 0.0;
    this.amplitude = 3;
}

SineWaveEnemy.prototype = Object.create(Sprite.prototype);
SineWaveEnemy.prototype.constructor = RainDropEnemy;
SineWaveEnemy.prototype.r = 40;

SineWaveEnemy.prototype.move = function() {
    this.dx += 0.05;
    this.x += sin(this.dx) * this.amplitude;
    this.y += this.speed;
    if(this.y > height) {
        this.x = random(width);
        this.y = random(-250, -50);
    }
}

SineWaveEnemy.prototype.display = function() {
    fill(0, 255, 100);
    ellipse(this.x, this.y, this.r, this.r);
    this.collisions();
}

SineWaveEnemy.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 1) {
            _sprites[i].handleCollision();
            this.handleCollision();
        }
    }
}

SineWaveEnemy.prototype.control = function() {
    this.move();
    this.display();
    this.collisions();
}