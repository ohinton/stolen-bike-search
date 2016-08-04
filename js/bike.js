function Bike(){

}

Bike.prototype.getBikesByLocation = function(city) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + city + "&proximity_square=100").then(function(response) {
    response.bikes.forEach(function(bike) {
      var title = bike.title;
      $('.showResults').append("<li>" + title + "</li>");
      }).fail(function(error){
      $('#showResults').text(error.responseJSON.message);
      });
  });
};

exports.bikeModule = Bike;
