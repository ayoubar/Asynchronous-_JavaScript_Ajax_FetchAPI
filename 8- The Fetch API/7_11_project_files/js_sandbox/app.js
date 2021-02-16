const getTextButton = document.getElementById('button1');

const getJsonButton = document.getElementById('button2');

// document.getElementById('button3').addEventListener('click', getExternal);

getTextButton.addEventListener('click', getText);
getJsonButton.addEventListener('click', getJson);
// // Get local text file data

function getText() {
  const URL = 'test.txt';
  fetch(URL, { method: 'GET' })
    .then(function (reponse) {
      return reponse.text();
    })
    .then(function (donnees) {
      document.getElementById('output').textContent = donnees;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getJson() {
  const URL = 'posts.json';
  fetch(URL, { method: 'GET' })
    .then(function (reponse) {
      return reponse.text();
    })
    .then(function (donnees) {
      console.log(donnees);
      const convertData = JSON.parse(donnees);
      console.log(convertData);

      // créer un tableau html
      const table = document.createElement('table');
      table.innerHTML = `
        <thead>
              <th> id </th>
              <th> title </th>
              <th> body </th>
        </thead>
      `;
      // table.innerHTML = `
      //   <tbody> </tbody>
      // `;
      const tbody = document.createElement('tbody');

      convertData.forEach(function (data) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td> ${data.id}</td>
          <td> ${data.title}</td>
          <td> ${data.body}</td>
        `;

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);

      document.getElementById('output').appendChild(table);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// // Get local json data
// function getJson() {
//   fetch('posts.json')
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }

// // Get from external API
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res){
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//       console.log(err);
//     });
// }

// JSON : Javascript Object Notation

// function promiseExample() {
//   return new Promise((resolve, reject) => {
//     return resolve([1, 2, 3]);
//   });
// }

// promiseExample().then(function (d) {
//   console.log(d);
// });

// objet json
