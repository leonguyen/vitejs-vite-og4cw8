var request = new XMLHttpRequest();
request.open('GET', ' https://online.namnguyen68.repl.co', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    document.getElementById('app').innerHTML = this.response;
  } else {
    // We reached our target server, but it returned an error
    
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();