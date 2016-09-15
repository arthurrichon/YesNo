var x = document.getElementById("demo");
var truth = document.getElementById('answer');
var theAnswer = {};


function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(translatePosition);
		} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
		}
}

function translatePosition(position) {
	var lat = position.coords.latitude,
			long = position.coords.longitude;

	// Transform the location data into string
	lat = lat.toString().split('.').join('');
	long = long.toString().split('.').join('');

	theAnswer.position = lat + long;
	console.log('GOTCHA !');

}

function splitValue(type, data){

	// Treat the string returned by getLocation() for the position
	if(type === 'position'){
		var result = 0;
		for (var i = 0; i < data.length; i++) {
			var value = parseInt(data[i], 10);
			result += value;
		}
		theAnswer.position = result;
	}


	// Treat the string returned by the input for the date
	if(type === 'date'){
		var result = 0;

		data = data.replace(/\//g, '').split('');
		console.log(data);
		for(i = 0; i < data.length; i++){
			var value = parseInt(data[i], 10);
			result += value;
		}
		theAnswer.birthDate = result;
		console.log(theAnswer.birthDate);
	}
}

///// NEW ONE //////

function yesNo(birthDate, geoLocation){
	var answer;
	birthDate = document.getElementById('inputDate').value;

	splitValue('position', theAnswer.position);


	splitValue('date', birthDate);
	answer = theAnswer.birthDate + theAnswer.position;

	// Logs
	console.info('birthDate', theAnswer.birthDate);
	console.info('position', theAnswer.position);

	if(answer % 2 == 0){
		truth.innerHTML = "It's a YES";
	} else {
		truth.innerHTML = "It will be a NO";
	}

}
