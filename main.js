function avaliableSensors(){
/*
	var featuresWindow = [{api:Accelerometer,name:"acelerometro"},{api:ProximitySensor,"proximidad"},{api:Gyroscope,name:"giroscopio"},{api:Magnetometer,name:"magnetometro"},{api:AmbientLightSensor,name:"luz"}];
	var featuresNavigator=  [{api:getUserMedia,name:"camara"},{api:bluetooth,name:"bluetooth"}];

	console.log(featuresWindow);

	for(var i = 0; i < featuresWindow.length; i++){
		console.log("Entre al 1 for");
		if (window.featuresWindow[i].api) { //Sensor acelerometro
			document.getElementById(featuresWindow[i].name).innerText = 'Soportado';
		}else{document.getElementById(featuresWindow[i].name).innerText = 'No Soportado';}
	}
	console.log("Termine el 1 for");
	for(var j = 0; j < featuresNavigator.length; j++){
		if (navigator.featuresNavigator[j].api) { //Sensor acelerometro
			document.getElementById(featuresNavigator[j].name).innerText = 'Soportado';
		}else{document.getElementById(featuresNavigator[j].name).innerText = 'No Soportado';}
	}
    */
    
	if (window.Accelerometer) { //Sensor acelerometro
	  innerText('acelerometro','Soportado');
	}else{innerText('acelerometro','No Soportado');}

	if (window.ProximitySensor) { //Sensor de proximidad
	  innerText('proximidad','Soportado');
	}else{innerText('proximidad','No Soportado');}

	if (window.Gyroscope) { // Sensor giroscopio
	  innerText('giroscopio','Soportado');
	}else{innerText('giroscopio','No Soportado');}

	if (window.Magnetometer) { // Sensor magnetometro
	  innerText('magnetometro','Soportado');
	}else{innerText('magnetometro','No Soportado');}

	if(navigator.getUserMedia){ // Camara
		 innerText('camara','Soportado');
	}else{innerText('camara','No Soportado');}

	if(window.AmbientLightSensor){ // Sensor de luz
		innerText('luz','Soportado');
	}else{innerText('luz','No Soportado');}

	if(navigator.bluetooth){ // Bluetooth
		innerText('bluetooth','Soportado');
	}else{innerText('bluetooth','No Soportado');}
	
}

function innerText(elementId,text){
	document.getElementById(elementId).innerText = text;
}