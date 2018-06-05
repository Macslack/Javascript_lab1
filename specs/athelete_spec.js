const assert = require('assert')
const Athlete = require('../athlete.js')
const WaterBottle = require('../water_bottle.js')
describe('Athlete', function(){
  let bottle
  let athlete;

  beforeEach(function(){
    athlete = new Athlete();
    bottle = new WaterBottle();
  });

  it("hydration starts at 100", function(){

    assert.strictEqual(athlete.hydration, 100);
  });

  it("distance covered starts at 0", function(){

    assert.strictEqual(athlete.distance_covered, 0);
  });

  it("running decreases hydration, increases  distance covered", function(){

    athlete.run();
    assert.strictEqual(athlete.hydration, 90);
    assert.strictEqual(athlete.distance_covered, 10);
  });

  it("running should go no distance at hydration 0 ", function(){

    athlete.hydration = 0;
    athlete.run();
    assert.strictEqual(athlete.distance_covered, 0);
  })

  it("athlete should be able to drink from water bottle ", function(){

    athlete.drink(bottle);
    assert.strictEqual(athlete.hydration, 110);
  })













})
