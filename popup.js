
function checkForConnection() {
  // Google image search - 100 searches per day.
  // https://developers.google.com/image-search/
  var testUrl = 'http://www.google.com';

  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4 && xhr.status != 200) {
      renderStatus("Checking for connection...");
    }else if (xhr.readyState == 4 && xhr.status == 200){
      renderStatus("Got connection!");
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
