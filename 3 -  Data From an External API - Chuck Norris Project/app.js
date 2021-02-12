// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);

//       let output = '';

//       if(response.type === 'success') {
//         response.value.forEach(function(joke){
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>Something went wrong</li>';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }

//   xhr.send();

//   e.preventDefault();
// }

const categories = document.getElementById('categories');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/categories', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.status);
    const cat = JSON.parse(xhr.responseText);
    for (let c of cat) {
      categories.innerHTML += `<option value="${c}"> ${c}</option>`;
    }
  }
};

xhr.send();

categories.addEventListener('change', function (e) {
  console.log(e.target.value);
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://api.chucknorris.io/jokes/random?category=${e.target.value}`,
    true
  );

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      const joke = JSON.parse(xhr.responseText);
      document.querySelector('.jokes').textContent = joke.value;
    }
  };

  xhr.send();
});
