function creationCallback(notID) {
console.log("Succesfully created " + notID + " notification");
}

function checkForConnection() {
  var testUrl = 'http://www.google.com';

  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4 && xhr.status != 200) {
      renderStatus("Checking for connection...");
    }else if (xhr.readyState == 4 && xhr.status == 200){
      renderStatus("Got connection!");
      var opt = {
  type: "basic",
  title: "",
  message: "Got Connection!",
  iconUrl: "icon64.png"
}
      chrome.notifications.create('1', opt, creationCallback);


    }
    else if (xhr.readyState == 4 && xhr.status != 200){
      renderStatus("No connection :(");

    }
}
xhr.open('GET', testUrl);
xhr.send(null);


}

function renderStatus(statusText) {
  document.getElementById('status-label').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    checkForConnection();
  });
