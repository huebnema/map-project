// Map scripts

function initMap() {
    var myLatLng = {lat: 43.05, lng: -87.95};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    setMarkers(map);
}


// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

// MODEL //
var restaurants = [
    ['Cafe Hollander', 43.0664868, -87.87782729999998, 4],
    ['Beans & Barley', 43.05928, -87.892999, 5],
    ['Colectivo', 43.0591269, -87.88515799999999, 3],
    ['Rochambo', 43.052783, -87.894867, 2],
    ['Anodyne', 43.0254467, -87.91364299999998, 1]
];

function setMarkers(map) {
    // Adds markers to the map.
    for (var i = 0; i < restaurants.length; i++) {
        var restaurant = restaurants[i];
        var marker = new google.maps.Marker({
            position: {lat: restaurant[1], lng: restaurant[2]},
            map: map,
            title: restaurant[0],
            zIndex: restaurant[3]
        });
    }
}



// ko.applyBindings(new RestaurantsViewModel());

//Knockout js
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
//function AppViewModel() {
//    this.firstName = ko.observable("Joe");
//    this.lastName = ko.observable("Bertington");
//}
//
//// Activates knockout.js
//ko.applyBindings(new AppViewModel());