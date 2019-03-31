// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// printer_status()

function printer_status(status) {
  var c = document.getElementById("printer_status");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(window.innerWidth/2,9,6,0, 2 * Math.PI);
  ctx.stroke();
  if (status === 'online' ) {
    ctx.fillStyle = "green";
    ctx.fill();
  }
  if (status === 'unavailable' ) {
    ctx.fillStyle = "red";
    ctx.fill();
  }
  if (status === 'busy' ) {
    ctx.fillStyle = "orange";
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
    printer_status('online')
})
