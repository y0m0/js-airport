'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land', 'takeoff']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForTakeoff(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it('check if the weather is stormy', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', function(){

    it('does not clear planes for takeoff', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
    });

    it('does not clear planes for landing', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });

  }); 


});
