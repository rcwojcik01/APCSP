
function Bullet(x, y, team, vector) {
    Sprite.call(this, x, y, team);
    this.vector = vector;
}

Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.r = 15;

Bullet.prototype.move = function() {
    
    
    if(this.y > height || this.y < 0) {
        _sprites.splice(_sprites.indexOf(this), 1);
    } else {
        this.x += this.vector.x;
        this.y += this.vector.y;
    }
}
    
    // not sure why but self does not work here; I had to use this

Bullet.prototype.display = function() {
    fill(0);
    ellipse(this.x, this.y, this.r, this.r);
}