var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#inputLocation').click(function() {
    var city = $('#location').val();
    currentBikeObject.getBikesByLocation(city);
    });
  });
