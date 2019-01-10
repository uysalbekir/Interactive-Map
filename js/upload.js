// Backend
(function() {

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

        // Delete items
        var select = document.getElementById("dropdownDelete");

        var options = [val.titel];

            var opt = options;
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);

        $('#deleteform').submit(function(evt) {
          var db = firebase.database();
          var ref = db.ref();
          var survey=db.ref(gegevens);    //Eg path is company/employee
          survey.child('#dropdownDelete option:selected').remove();
        });
    });


  });

}());


//////////
var mob = [];
$("input[type=file]").change(function(){
	$("input[type=file]").parse({
		config: {
			delimiter: "",	// auto-detect
			newline: "",	// auto-detect
			quoteChar: '"',
			header: true,
			complete: function(results, file) {
        for (var i=0; i<results.data.length;i++) {
          if (i == results.data.length){
            alert("Done!");
          }
          (function (i) {
            setTimeout(function () {
              mob.push(results.data[i]); //modify this line as per the format of your CSV file
              var jobid = mob[i].ID;
              var title = mob[i].Titel;
              var street = mob[i].Straat;
              var hnumber = mob[i].Huisnummer;
              var city = mob[i].Stad;
              var pcode = mob[i].Postcode;
              var address = street + " " + hnumber + " " + city;
              console.log(address);

              // get coordinates and post to firebase
              $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + address, function(data) {
                  $.each(data, function(key, val) {
                    $("#output").append([i] + ", " + jobid + ", " + title + ", " + val.lat + ", " + val.lon + "<br><br>");
                    firebase.database().ref('gegevens').push({
                        id: jobid,
                        titel: title,
                        straat: street,
                        huisnummer: hnumber,
                        stad: city,
                        postcode: pcode,
                        latitude: val.lat,
                        longitude: val.lon
                    });

                  });
              });
          }, 2000*i);
        })(i);
        };

			}
		}
	});
});

// Manual input
$('#manualform').submit(function(evt) {
  evt.preventDefault();
  $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + $('#street').val() + " " + $('#hnumber').val() + " " + $('#city').val(), function(data) {
      $.each(data, function(key, val) {
        firebase.database().ref('gegevens').push({
          titel: $('#title').val(),
          straat: $('#street').val(),
          huisnummer: $('#hnumber').val(),
          stad: $('#city').val(),
          latitude: val.lat,
          longitude: val.lon
          });
          $('.alert').text($('#title').val() + ", " + $('#street').val() + " " + $('#hnumber').val() + ", " + $('#city').val() +  " - succesvol toegevoegd");
          $('.input').val('');
      });
  });
});




// Fade in
$(document).ready(function() {
$('body').fadeIn(500);
});
