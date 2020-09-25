// Add your code here
let formData = {
  username: "ben",
  email: "yahoo"
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  body: JSON.stringify(formData)
}

function submitData(username, email) {
  fetch("http://localhost:3000/user", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });

  return fetch
}
