var map;
var allMapMarkers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.881832, lng: -87.623177},
    zoom: 8
  });
}

function addMarker(newEntry){
  //add the newEntry coordinates as the googleMaps LatLng object
  var newPos = new google.maps.LatLng(newEntry.location.latitude, newEntry.location.longitude);
  
  //set up google maps options with entry point as the center
  var mapOptions = {
    zoom: 18,
    center: newPos,
    mapTypeId: 'roadmap'
    
  }
  //get the google maps object and set it to "map"
  var map = new google.maps.Map(
    document.getElementById('map'), mapOptions);

  //setup a marker with entry data.
  var marker = new google.maps.Marker({
    position: newPos,
    map: map,
    title: newEntry.title
  });
  allMapMarkers.push(marker);
  marker.setMap(map);
}
function rmMarkers(){

  allMapMarkers.forEach(markers => {
    markers.setMap(null);
    allMapMarkers.pop();
  });

}