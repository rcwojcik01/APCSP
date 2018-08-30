
function RainDropEnemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 5;
}

RainDropEnemy.prototype = Object.create(Sprite.prototype);
RainDropEnemy.prototype.constructor = RainDropEnemy;
RainDropEnemy.prototype.r = 40;

RainDropEnemy.prototype.move = function() {
    this.y += this.speed;
    if(this.y > height) {
        this.x = random(width);
        this.y = random(-250, -50);
    }
}

RainDropEnemy.prototype.display = function() {
    fill(0, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
    this.collisions();
}

RainDropEnemy.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 1) {
            _sprites[i].handleCollision();
            this.handleCollision();
        }
    }
}