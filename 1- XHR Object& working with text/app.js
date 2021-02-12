// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // OPEN
//   xhr.open('GET', 'data.txt', true);

//   // console.log('READYSTATE', xhr.readyState);

//   // Optional - Used for spinners/loaders
//   xhr.onprogress = function(){
//     console.log('READYSTATE', xhr.readyState);
//   }

//   xhr.onload = function(){
//     console.log('READYSTATE', xhr.readyState);
//     if(this.status === 200) {
//       // console.log(this.responseText);
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   }

//   // xhr.onreadystatechange = function() {
//   //   console.log('READYSTATE', xhr.readyState);
//   //   if(this.status === 200 && this.readyState === 4){
//   //     console.log(this.responseText);
//   //   }
//   // }

//   xhr.onerror = function() {
//     console.log('Request error...');
//   }

//   xhr.send();

//     // readyState Values
//     // 0: request not initialized
//     // 1: server connection established
//     // 2: request received
//     // 3: processing request
//     // 4: request finished and response is ready

//   // HTTP Statuses
//   // 200: "OK"
//   // 403: "Forbidden"
//   // 404: "Not Found"
// }

// XMLHttpRequest

/*
  Methodes http : 
    GET   - recuperez  des resources (page html , 
                                  page txt , json, 
                                  image ,
                                  fichier css , fichier js )
    POST   - envoyé des données vers le serveur
    PUT    -  modifier des resources sur  le serveur
    DELETE - supprimer des resources sur le serveur
    PATCH  - modifier des resources sur  le serveur

    OPTION 
    HEAD

*/

// const button = document.getElementById('button');

// button.addEventListener('click', getTextData);

// function getTextData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'data.txt', true);

//   console.log('this is xhr', xhr);
//   // verifier si la requete a été bien effectué

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//       document.getElementById('output').textContent = xhr.responseText;
//     }
//   };

//   xhr.send(); // envoi de la requete
// }

const button = document.getElementById('button');

button.addEventListener('click', sendToServer);

function sendToServer() {
  // instancier un Objet XMLHttpRequest
  const http = new XMLHttpRequest();

  const url = 'http://127.0.0.1:5501/index.html';
  // mettre les parametres necessaire
  http.open('GET', url, true);

  http.onload = function () {
    if (http.status === 200) {
      document.getElementById('output').innerHTML = http.responseText;
    }
  };

  http.send();
}
