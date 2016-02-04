
// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

// Source of help with connecting data to map:  https://discussions.udacity.com/t/ive-hit-a-wall/43376/5

// MODEL //
var initialLocations = [
    {
        name: "Cafe Hollander",
        latLng: (43.0664868, -87.87782729999998)
    },
    {
        name: "Beans & Barley",
        latLng: (43.05928, -87.892999)
    },
    {
        name: "Colectivo",
        latLng: (43.0591269, -87.88515799999999)
    },
    {
        name: "Rochambo",
        latLng: (43.052783, -87.894867)
    },
    {
        name: "Anodyne",
        latLng: (43.0254467, -87.91364299999998)
    }
];




var viewModel = function() {
    var self = this;

    this.locationList = ko.observableArray([]);

    var Location = function(name, lat, lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }

    //Display markers

    for (var i = 0; i < initialLocations.length; i++) {
        //var restaurant = restaurants[i];
        self.locationList.push(new Location(initialLocations[i]));
    };

    for(var i=0; i< this.locationList.length; i++) {

        var marker = new google.maps.Marker({
            position: this.initialLocations[i](latLng),
            map: map,
            title: this.locationList[i].name

            //position: {lat: restaurant[1], lng: restaurant[2]},
            //map: map,
            //title: restaurant[0],
            //zIndex: restaurant[3]
        });

        //initialLocations.forEach(function(locationItem){
        //    self.locationList.push( new Location(locationItem) );
        //    }),

        //this.currentLocation = ko.observable(this.locationList()[0]);

        // Map scripts
        function initMap() {
            var myLatLng = {lat: 43.05, lng: -87.95};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: myLatLng
            });

            viewModel();

        }


    }

//
//
//function RestaurantsViewModel(name, lat, lng) {
//    this.name = name;
//    this.lat = ko.observable(lat);
//    this.lng = ko.observable(lng);
//
//    var marker = new google.maps.Marker({
//        position: {lat, lng},
//        map: map,
//        title: name
//    })
//}

}
ko.applyBindings(new viewModel());



//
//function setMarkers(map) {
//    // Adds markers to the map.
//
//    for (var i = 0; i < restaurants.length; i++) {
//        var restaurant = restaurants[i];
//        var marker = new google.maps.Marker({
//            position: {lat, lng},
//            map: map,
//            title: name
//
//            //position: {lat: restaurant[1], lng: restaurant[2]},
//            //map: map,
//            //title: restaurant[0],
//            //zIndex: restaurant[3]
//        });
//    }
//}





//Knockout js
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
//function AppViewModel() {
//    this.firstName = ko.observable("Joe");
//    this.lastName = ko.observable("Bertington");
//}
//
//// Activates knockout.js
//ko.applyBindings(new AppViewModel());