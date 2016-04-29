// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Source of help with connecting data to map:  https://discussions.udacity.com/t/ive-hit-a-wall/43376/5
// Special thanks to Udacity coach Heidi for help with the markers!
// Thanks to MCS's input in the discussion forum!:  https://discussions.udacity.com/t/filtering-google-maps-markers-with-list-view/34660 & http://codepen.io/prather-mcs/pen/KpjbNN?editors=001
// Source of help with applying bindings within info windows:  http://jsfiddle.net/SittingFox/nr8tr5oo/

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
    }
];

// Present an error if Google Maps fails to load
function googleError() {
    document.getElementById("map").innerHTML = "The map could not be loaded.";
}



// Temoporary implementation of googleMap - find another solution later

var googleMap; // declare googlemap in the global scope with the keyword var

function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.05, lng: -87.95},
        zoom: 12
    });
    ko.applyBindings(new viewModel());
}


var viewModel = function () {

    var self = this;

    // Build "Place" objects to store the place data from locations
    self.allPlaces = [];
    locations.forEach(function (place) {
        self.allPlaces.push(new Place(place));


    });

    // Build InfoWindows

    self.buildInfoWindow = function (place) {

            var infoWindowHTML =
        var infoWindowHTML ='<h1>' + place.name + '</h1>' + '<img src="' + place.flickrImgUrl + '">';                    isInfoWindowLoaded = true;


        var infoWindowOptions = {
                content: infoWindowHTML + place.name
            };

            place.infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    };




    // Build Markers
    self.allPlaces.forEach(function (place) {



        // Call to Flickr to load images


        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickerAPI, {
                tags: place.name,
                tagmode: "any",
                format: "json"
            })
            .done(function (data) {

                place.flickrImgUrl = data.items[0].media.m;
                self.buildInfoWindow(place);

            })

            .fail(function () {
                alert("$.get failed to receive the images from Flickr.");
            });



        var markerOptions = {
            map: googleMap,
            position: place.latLng
        };

        place.marker = new google.maps.Marker(markerOptions);
        place.marker.addListener('click', function () {
            place.infoWindow.open(googleMap, place.marker);

        });
        place.marker.addListener('click', toggleBounce);

        function toggleBounce() {
            if (place.marker.getAnimation() !== undefined) {
                place.marker.setAnimation(undefined);
            } else {
                place.marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }


    });



    self.visiblePlaces = ko.observableArray();


    // Remove data for places if they are typed in
    self.allPlaces.forEach(function (place) {
        self.visiblePlaces.push(place);
    });


    // Store the user's input
    self.userInput = ko.observable('');


    // Remove places that are not related to the user's input
    self.filterMarkers = function () {
        var searchInput = self.userInput().toLowerCase();

        self.visiblePlaces.removeAll();

        // Begins search filter and determines if the input matches any of the places
        self.allPlaces.forEach(function (place) {
            place.marker.setVisible(false);

            if (place.name.toLowerCase().indexOf(searchInput) !== -1) {
                self.visiblePlaces.push(place);
            }
        });


        self.visiblePlaces().forEach(function (place) {
            place.marker.setVisible(true);
        });
    };


    function Place(dataObj) {
        this.name = dataObj.name;
        this.latLng = dataObj.latLng;

        // You will save a reference to the Places' map marker after you build the
        // marker:
        this.marker = null;
    };
};


// ko.applyBindings(new viewModel());


