// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Source of help with connecting data to map:  https://discussions.udacity.com/t/ive-hit-a-wall/43376/5
// Special thanks to Udacity coach Heidi for help with the markers!

//  Map scripts

function viewModel() {
    var self = this;

    this.setMarkers = function() {
        // Adds markers to the map.
        var self = this;

        for (var i = 0; i < self.locations().length; i++) {
            var marker = new google.maps.Marker({
                position: {lat: self.locations()[i].lat, lng: self.locations()[i].lng},
                map: self.map,
                title: name
            });
        }
    };

    self.locations = ko.observableArray([
        {
            name: "Cafe Hollander",
            lat: (43.0664868),
            lng: (-87.87782729999998)
        },
        {
            name: "Beans & Barlery",
            lat: (43.05928),
            lng: (-87.892999)
        },
        {
            name: "Colectivo",
            lat: (43.0591269),
            lng: (-87.88515799999999)
        },
        {
            name: "Rochambo",
            lat: (43.052783),
            lng: (-87.88515799999999)
        },
        {
            name: "Anodyne",
            lat: (43.0254467),
            lng: (-87.91364299999998)
        }
    ]);

}

function initMap() {
    var myLatLng = {lat: 43.05, lng: -87.95};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    viewM.map = map;
    viewM.setMarkers();

}

var viewM = new viewModel();
ko.applyBindings(viewM);