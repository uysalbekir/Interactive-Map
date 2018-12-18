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
    var dataAlles = snapshot.val().Vrijwilligerswerk;


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
				for(var i=0; i<results.data.length;i++){
					mob.push(results.data[i]); //modify this line as per the format of your CSV file
				}
				console.log(mob);
				$(".d").val(mob);
			}
		}
	});
});

// Fade in
$(document).ready(function() {
$('body').fadeIn(500);
});
