// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

printer_status()

function printer_state() {
  let printer = document.getElementById("printer").value;
  let apikey = document.getElementById("apikey").value;
  let req = new XMLHttpRequest();
  req.withCredentials = true;
  let formData = new FormData();
  req.open("GET", `http://${printer}/api/printer`);
  req.setRequestHeader("X-Api-Key", apikey);
  req.send(formData);
  console.log(req);
  console.log(req.readyState);
  return req.readyState;
  // TODO: what if 404 or not available
}

function printer_status(status) {
  // TODO: This makes a new circle every time, doesn't move dynamically with window
  var c = document.getElementById("printer_status");
  var ctx = c.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  // ctx.canvas.height = window.innerHeight;
  ctx.beginPath();
  ctx.arc(ctx.canvas.width/2,9,6,0, 2 * Math.PI);
  ctx.stroke();
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
