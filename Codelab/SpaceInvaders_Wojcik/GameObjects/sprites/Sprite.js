function Sprite(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
}

Sprite.prototype.handleCollision = function() {
    _sprites.splice(_sprites.indexOf(this),1);
}

Sprite.prototype.isColliding = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.r/2 + other.r/2 ? true : false;
}

Sprite.prototype.control = function() {
    this.move();
    this.display();
}