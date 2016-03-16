
var state = -1; //variable to store the state of the Connection, 0 = no Connection; 1 = there is Connection
var testUrl = 'http://www.google.com';

var xhr = new XMLHttpRequest();
checkForConnection()
window.setInterval(checkForConnection, 5000)

function checkForConnection() {


  xhr.open('GET', testUrl);

xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
    }else if (xhr.readyState == 4 && xhr.status == 200){
      var newState = 1;
      stateChanged(newState)
    }
    else if (xhr.readyState == 4 && xhr.status != 200){
      var newState = 0;
      stateChanged(newState)
    }

}

  xhr.send(null);



}

function stateChanged(newState) {
    var opt
  if (newState == 1 && (state == 0 || state == -1)){
      state = newState;//went from offline to online
     opt = {
        type: "basic",
        title: "",
        message: "Online!",
        iconUrl: "icon64.png"
      };
  } else if (newState == 0 && (state == 1 || state == -1)){
      state = newState;//went from online to offline
     opt = {
      type: "basic",
      title: "",
      message: "Offline!",
      iconUrl: "icon64.png"
    };

  }
    if(opt != null){
        chrome.notifications.create(status, opt, creationCallback);
    }

}


function creationCallback(notID) {
    console.log("Succesfully created " + notID + " notification");
}

chrome.runtime.onMessage.addListener(function(request) {
console.log("message");
while (request.type === 'enabled') {
  console.log("enabled");

  checkForConnection();

}
    });
