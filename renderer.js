// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function upload() {
  let file = document.getElementById("submitFile");
  console.log(file)
  let req = new XMLHttpRequest();
  let formData = new FormData();
  formData.append("file", file);
  req.open("POST", "https://1b3f69e9-47db-4e0e-8641-8d63257dca60.mock.pstmn.io/api/files/local");
  req.send(formData);
}

document.querySelector('#submitFile').addEventListener('click', () => {
    upload()
})