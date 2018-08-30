
function RainDropShooter(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 3;
    this._canFire = true;
}

RainDropShooter.prototype = Object.create(Sprite.prototype);
RainDropShooter.prototype.constructor = RainDropShooter;
RainDropShooter.prototype.r = 50;

RainDropShooter.prototype.getTarget = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(_sprites[i].team == 1) {
            return _sprites[i];
        }
    }
}

RainDropShooter.prototype.aim = function() {
    var target = this.getTarget();
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var vector = createVector(dx, dy);
    vector.normalize();
    return vector.mult(7);
}

RainDropShooter.prototype.fire = function() {
    var self = this;
    if(this._canFire) {
        self._canFire = false;
        _sprites.push(new Bullet(this.x, this.y, this.team, this.aim()));
        setTimeout(function() {
            self._canFire = true;
        }, 1000);
    }
}

RainDropShooter.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 1) {
            _sprites[i].handleCollision();
            this.handleCollision();
        }
    }
}

RainDropShooter.prototype.move = function() {
    this.y += this.speed;
    if(this.y > height) {
        this.x = random(width);
        this.y = random(-250, -50);
    }
}

RainDropShooter.prototype.display = function() {
    fill(255, 155, 155);
    ellipse(this.x, this.y, this.r, this.r);
}

// override
RainDropShooter.prototype.control = function() {
    this.move();
    this.display();
    this.collisions();
    this.fire();
}