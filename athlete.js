const Athlete = function(){
  this.hydration = 100;
  this.distance_covered = 0;
}

Athlete.prototype.run = function () {
  if (this.hydration >= 10){
  this.hydration -= 10;
  this.distance_covered += 10;
};};

Athlete.prototype.drink = function (bottle) {
    this.hydration += bottle.drink();
};

module.exports = Athlete;
