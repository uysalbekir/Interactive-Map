// Backend
$(document).ready(function() {

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyCamyJnN9WTw2taT0IpmtWbtt03yUUvwgA",
   authDomain: "ehv-doet.firebaseapp.com",
   databaseURL: "ehv-doet.firebaseio.com",
   projectId: "ehv-doet",
   storageBucket: "ehv-doet.appspot.com",
   messagingSenderId: "340245264979"
 };
 firebase.initializeApp(config);

 //database reference
 var ref = firebase.database().ref();

  ref.on("value", function(snapshot) {
    var dataAlles = snapshot.val().gegevens;

    jQuery.each(dataAlles, function(i, val) {

      // Marker
      var i = L.marker([val.latitude,val.longitude]).addTo(mymap);
      // Popup data
      i.bindPopup("<b>"+ val.titel +"</b>").closePopup();

    });

  });

}());




var mymap = L.map('mapid').setView([51.441643, 5.469722], 11);



// marker1.bindPopup("<b>Hello world!</b><br>I am marker 1").closePopup();
// marker2.bindPopup("<b>Hello world!</b><br>I am marker 2").closePopup();
// marker3.bindPopup("<b>Hello world!</b><br>I am marker 3").closePopup();

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

// Fade in
$(document).ready(function() {
$('body').fadeIn(500);
});
