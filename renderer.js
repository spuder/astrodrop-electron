// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

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