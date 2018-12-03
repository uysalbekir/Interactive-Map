// Fade in
$(document).ready(function() {
$('body').fadeIn(500);
});

var mymap = L.map('mapid').setView([51.441643, 5.469722], 11);

var marker1 = L.marker([51.433938,5.479669]).addTo(mymap); //Marker1
var marker2 = L.marker([51.439288,5.463025]).addTo(mymap); //Marker2
var marker3 = L.marker([51.441107,5.494253]).addTo(mymap); //Marker3

marker1.bindPopup("<b>Hello world!</b><br>I am marker 1").closePopup();
marker2.bindPopup("<b>Hello world!</b><br>I am marker 2").closePopup();
marker3.bindPopup("<b>Hello world!</b><br>I am marker 3").closePopup();

// Use the following to highlight a circle on the map.
// var circle = L.circle([51.441643, 5.469722], {
//    color: 'red',
//    fillColor: '#000',
//    fillOpacity: 0.5,
//    radius: 500
// }).addTo(mymap);

// Use the following code to highlight a certain area.
// var polygon = L.polygon([
//    [51.509, -0.08],
//    [51.503, -0.06],
//    [51.51, -0.047]
// ]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVraXJ1eXNhbCIsImEiOiJjanAyZGExajcwNWlxM3FwaG1zdnVmeDV4In0.iCQ_PVwQ2LMdA6cdPaUR-Q'
}).addTo(mymap);
