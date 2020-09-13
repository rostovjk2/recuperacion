//https://www.eclipse.org/paho/clients/js/
var clic = 1;
function Historial(){ 
   if(clic==1){
   document.getElementById("auto").style.display = "inline";
   }
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "lmzcyber@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }
	
  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Estoy Conectado...");
	
    client.subscribe("lmzcyber@gmail.com/test");
	
    message = new Paho.MQTT.Message("Hola");
    message.destinationName = "lmzcyber@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	  
    console.log("New mensaje:"+message.payloadString);
	document.getElementById("estado").innerHTML=message.payloadString.split("=")[1];
	document.getElementById("hora").innerHTML=message.payloadString.split("=")[2];

  }
