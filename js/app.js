
// Adapted from:  https://developers.google.com/maps/documentation/javascript/examples/icon-complex

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

// Source of help with connecting data to map:  https://discussions.udacity.com/t/ive-hit-a-wall/43376/5
// Additional source:  http://stackoverflow.com/questions/29557938/removing-map-pin-with-search
//var map, marker;
//  Map scripts
function initMap() {
    var myLatLng = {lat: 43.05, lng: -87.95};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });

}

//
//function initMap() {
////    var map = new google.maps.Map(document.getElementById('map'), {
////        zoom: 5,
////        center: new google.maps.LatLng(55, 11),
////        mapTypeId: google.maps.MapTypeId.ROADMAP
////    });
////}



function viewModel() {
    var self = this;

    self.restaurants = ko.observableArray([
        {
            name: "Cafe Hollander",
            lat: (43.0664868),
            Lng: (-87.87782729999998)
        }

    ]);

    //self.restaurants = ko.observableArray([
    //    {
    //        name: "Cafe Hollander",
    //        latLng: (43.0664868, -87.87782729999998)
    //    },
    //    {
    //        name: "Beans & Barley",
    //        latLng: (43.05928, -87.892999)
    //    },
    //    {
    //        name: "Colectivo",
    //        latLng: (43.0591269, -87.88515799999999)
    //    },
    //    {
    //        name: "Rochambo",
    //        latLng: (43.052783, -87.894867)
    //    },
    //    {
    //        name: "Anodyne",
    //        latLng: (43.0254467, -87.91364299999998)
    //    }
    //]);
}

      function setMarkers(map) {
        // Adds markers to the map.

        for (var i = 0; i < restaurants.length; i++) {
            var restaurant = restaurants[i];
            var marker = new google.maps.Marker({
                position: {lat: restaurants.lat, lng: restaurants.lng},
                map: map,
                title: name

                //position: {lat: restaurant[1], lng: restaurant[2]},
                //map: map,
                //title: restaurant[0],
                //zIndex: restaurant[3]
            });
        }
    }

// ko.applyBindings(new viewModel);



//function point(name, lat, long) {
//    this.name = name;
//    this.lat = ko.observable(lat);
//    this.long = ko.observable(long);
//
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(lat, long),
//        title: name,
//        map: map,
//        draggable: true
//    });
//
//}


//var viewModel = {
//    points: ko.observableArray([
//        new point('Test1', 55, 11),
//        new point('Test2', 56, 12),
//        new point('Test3', 57, 13)])
//};


// MODEL //


//var viewModel = {
//    points: ko.observableArray({
//        new: point('Cafe Hollander', (43.0664868, -87.87782729999998))
//    })
//};
//
//var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 12,
//    center: new google.maps.LatLng(43.05, -87.95),
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//});


//
//function point(name, latLng) {
//    this.name = name;
//    this.latLng = ko.observable(latLng);
//
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(latLng),
//        title: name,
//        map: map,
//        draggable: false
//    });
//
//}

//var viewModel = {
//
//    markers: ko.observableArray([
//        {name: "Cafe Hollander"}
//    ]),
//
//    query: ko.observable(''),
//
//    search: function(value) {
//        viewModel.markers.removeAll();
//    }
//}
//
//    for (var x in markers) {
//    if (markers[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
//        viewModel.markers.push(markers[x]);
//    }
//
//}

//var Location = function(name, lat, lng) {
//    this.name = name;
//    this.lat = lat;
//    this.lng = lng;
//}
//
//
//var viewModel = function() {
//    var self = this;
//
//    this.locationList = ko.observableArray([]);
//
//    //Display markers
//
//    for (var i = 0; i < initialLocations.length; i++) {
//        //var restaurant = restaurants[i];
//        self.locationList.push(new Location(initialLocations[i]));
//    };
//
//    for(var i=0; i< this.locationList.length; i++) {
//
//        var marker = new google.maps.Marker({
//            position: this.initialLocations[i](latLng),
//            map: map,
//            title: this.locationList[i].name
//        })
//
//        //initialLocations.forEach(function(locationItem){
//        //    self.locationList.push( new Location(locationItem) );
//        //    }),
//
//        //this.currentLocation = ko.observable(this.locationList()[0]);
//

//
//
//    }
//
////
////
////function RestaurantsViewModel(name, lat, lng) {
////    this.name = name;
////    this.lat = ko.observable(lat);
////    this.lng = ko.observable(lng);
////
////    var marker = new google.maps.Marker({
////        position: {lat, lng},
////        map: map,
////        title: name
////    })
////}
//
//}





//






//Knockout js
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
//function AppViewModel() {
//    this.firstName = ko.observable("Joe");
//    this.lastName = ko.observable("Bertington");
//}
//
//// Activates knockout.js
//ko.applyBindings(new AppViewModel());