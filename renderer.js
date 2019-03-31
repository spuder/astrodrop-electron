// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

printer_status()

function printer_state() {
  let file = document.getElementById("file").value;
  let apikey = document.getElementById("apikey").value;
  console.log("file is " + file);
  console.log("apikey is " + apikey);
  let req = new XMLHttpRequest();
  req.withCredentials = true;
  let formData = new FormData();
  req.open("GET", "http://astrobox1.local/api/printer");
  req.setRequestHeader("X-Api-Key", apikey);
  req.send(formData);
  console.log(req.readyState);
  return req.readyState;
  #TODO: what if 404 or not available
}

function printer_status(status) {
  var c = document.getElementById("printer_status");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(window.innerWidth/2,9,6,0, 2 * Math.PI);
  ctx.stroke();
  console.log("status is " + status)
  if (status === 1 ) {
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

function upload() {
  let file = document.getElementById("file").value;
  let apikey = document.getElementById("apikey").value;
  console.log("file is " + file);
  console.log("apikey is " + apikey);
  let req = new XMLHttpRequest();
  req.withCredentials = true;
  let formData = new FormData();
  formData.append("file", file);
  formData.append("print", "0");
  req.open("POST", "http://astrobox1.local/api/files/local");
  req.setRequestHeader("X-Api-Key", apikey);
  req.send(formData);
  console.log(req.response);
}

document.querySelector('#submitFile').addEventListener('click', () => {
    upload()
})

document.querySelector('#printerStatus').addEventListener('click', () => {
    var state = printer_state();
    printer_status(state);
})
