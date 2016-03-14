

function renderStatus(statusText) {
  console.log(statusText)
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("check-now").addEventListener("click", function()
  {
    chrome.runtime.sendMessage({type:'enabled'});

  }, false);
  });
