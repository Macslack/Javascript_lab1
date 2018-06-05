const WaterBottle = function(){
  this.volume = 0;
};

WaterBottle.prototype.fill = function () {
  this.volume = 100;
};

WaterBottle.prototype.drink = function () {

  this.volume -= 10;
  if (this.volume < 0) this.volume = 0 
  return 10;

};

WaterBottle.prototype.empty = function () {
  this.volume = 0;
};

module.exports = WaterBottle;
