// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Source of help with connecting data to map:  https://discussions.udacity.com/t/ive-hit-a-wall/43376/5
// Special thanks to Udacity coach Heidi for help with the markers!
// Thanks to MCS's input in the discussion forum!:  https://discussions.udacity.com/t/filtering-google-maps-markers-with-list-view/34660 & http://codepen.io/prather-mcs/pen/KpjbNN?editors=001

var locations = [
    {
        name: "Cafe Hollander",
        latLng: {lat: 43.0664868, lng: -87.87782729999998}
    },
    {
        name: "Beans & Barley",
        latLng: {lat: 43.05928, lng: -87.892999}
    },
    {
        name: "Colectivo",
        latLng: {lat: 43.0591269, lng: -87.88515799999999}
    },
    {
        name: "Rochambo",
        latLng: {lat: 43.052783, lng: -87.88515799999999}
    },
    {
        name: "Anodyne",
        latLng: {lat: 43.0254467, lng: -87.91364299999998}
    },
];

var viewModel = function() {

    var self = this;

    // this.setMarkers = function() {
    //     // Adds markers to the map.
    //     var self = this;
    //
    //     for (var i = 0; i < self.locations().length; i++) {
    //         var marker = new google.maps.Marker({
    //             position: {lat: self.locations()[i].lat, lng: self.locations()[i].lng},
    //             map: self.map,
    //             title: name
    //         });
    //     }
    // };

    // var latLng = self.locations()[i].lat, lng: self.locations()[i].lng;

    self.googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.05, lng: -87.95},
        zoom: 12
    });


// Build "Place" objects to store the place data from locations
    self.allPlaces = [];
    locations.forEach(function(place) {
        self.allPlaces.push(new Place(place));
    });


    // Build Markers
    self.allPlaces.forEach(function(place) {
        var markerOptions = {
            map: self.googleMap,
            position: place.latLng
        };

        place.marker = new google.maps.Marker(markerOptions);

        // Note for future implementation:  You might also add listeners onto the marker, such as "click" listeners.
    });

    self.visiblePlaces = ko.observableArray();


    // Remove data for places if they are typed in
    self.allPlaces.forEach(function(place) {
        self.visiblePlaces.push(place);
    });


    // Store the user's input
    self.userInput = ko.observable('');


    // Remove places that are not related to the user's input
    self.filterMarkers = function() {
        var searchInput = self.userInput().toLowerCase();

        self.visiblePlaces.removeAll();

        // Begins search filter and determines if the input matches any of the places
        self.allPlaces.forEach(function(place) {
            place.marker.setVisible(false);

            if (place.name.toLowerCase().indexOf(searchInput) !== -1) {
                self.visiblePlaces.push(place);
            }
        });


        self.visiblePlaces().forEach(function(place) {
            place.marker.setVisible(true);
        });
    };


    function Place(dataObj) {
        this.name = dataObj.name;
        this.latLng = dataObj.latLng;

        // You will save a reference to the Places' map marker after you build the
        // marker:
        this.marker = null;
    }

};

// function initMap() {
//     var myLatLng = {lat: 43.05, lng: -87.95};
//
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: myLatLng
//     });
//
//     viewM.map = map;
//     viewM.setMarkers();
//
// }

// var viewM = new viewModel();

ko.applyBindings(new viewModel());


