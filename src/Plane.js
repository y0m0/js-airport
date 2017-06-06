'use strict';

function Plane() {}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._airport = airport;
};

Plane.prototype.takeoff = function() {
  this._airport.clearForTakeoff(this);
};
