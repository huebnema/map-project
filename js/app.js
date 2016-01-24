// Map scripts

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

//Knockout js
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Joe");
    this.lastName = ko.observable("Bertington");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());