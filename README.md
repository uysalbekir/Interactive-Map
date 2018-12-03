<b>Interactive Map

In script.js, add this code (get access token at https://www.mapbox.com):</b>
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: ''
}).addTo(mymap);

<b>Set a starting point (in this case Eindhoven):</b>
var mymap = L.map('mapid').setView([51.441643, 5.469722], 11);

<b>mapid is also the id of the main div you want your map to be in.</b>
51.441643, 5.469722 is the longitute and latitute
11 stands for how far you want to zoom in.

<b>Add a marker:</b>
var marker1 = L.marker([51.433938,5.479669]).addTo(mymap);

<b>Provide the marker with information when clicking on it:</b>
marker1.bindPopup("Hello world!I am marker 1").closePopup();

<b>Add a circle highlight on the map, you can set the position by using the coordinates again. Also set the color, outline, opacity and the size:</b>
var circle = L.circle([51.441643, 5.469722], {
    color: 'red',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

<b>If you want to select a specific area, use the following code:</b>
 var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
 ]).addTo(mymap);

<b>You can add more points if you like.</b>
