var mapLocation = new google.maps.LatLng(33.770780, -84.382691); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 11, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


    //change address details here
    var contentString = '<div class="map-info-box">'
    + '<div class="map-head">'
    + '<h3>Launch</h3></div>'
    + '<p class="map-address"><i class="fa fa-map-marker"></i> Bizzieteen <br><i class="fa fa-phone"></i> 404-376-3847<br><span class="map-email"><i class="fa fa-envelope"></i> hey@bizzieteen.com</span></p>'
    + '<p><a href="https://www.google.com/maps/place/PO+54261,+Atlanta,+GA+30308,+USA" target="_blank">Open on Google Maps</a></p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    var image = 'assets/img/flag.svg';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Bizzieteen', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
