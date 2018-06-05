const assert = require('assert');
const WaterBottle = require('../water_bottle.js')
describe('Water Bottle', function() {

  it('should be empty at start', function(){

    const bottle = new WaterBottle();
    assert.strictEqual(bottle.volume, 0);
  });

  it('should go to 100 when filled', function(){
    const bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(bottle.volume, 100)
  })

  it('should go down by 10 when drunk', function(){
    const bottle = new WaterBottle();
    bottle.fill();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90)
  })

  it('should be 0 when empty', function(){
    const bottle = new WaterBottle();
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0)
  })

  it('should not go bellow 0 ', function(){
    const bottle = new WaterBottle();
    bottle.empty();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0)
  })

});
