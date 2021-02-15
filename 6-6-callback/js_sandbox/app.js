const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (element) {
//       output += `<li>${element.title}</li>`;
//     });
//     // console.log(output);
//     document.body.innerHTML = output; // parsing
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }); // 2 seconds
// getPosts(); // 1 second

function createPost(objetPost, callback) {
  setTimeout(function () {
    posts.push(objetPost);
    callback();
  }, 2000);
}

// function afficherPost() {
//   let output = '';
//   posts.forEach(function (element) {
//     output += `<li>${element.title}</li>`;
//   });
//   // console.log(output);
//   document.body.innerHTML = output; // parsing
// }

// createPost({ title: 'Post three', body: 'callback body' }, function () {
//   let output = '';
//   posts.forEach(function (element) {
//     output += `<li>${element.title}</li>`;
//   });
//   // console.log(output);
//   document.body.innerHTML = output; // parsing
// });

// getPosts();

// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// setTimeOut(f, delai)

// fonction synchrone
// fonction asynchrone

/*
  forEach:
    ["nawfel", "youssra", "mohammed" ,"chreyd", "anass"].forEach(function(element, index) { 
      console.log(`element ${element} <==> indice ${index}`)
    });

*/

function salutation(name) {
  alert('HELLO MY NAME IS ' + name);
}

function getAge(age) {
  alert("I'm " + age);
}

function saisie_nom(callback1, callback2) {
  let name = prompt('entrez votre nom');
  let age = prompt('entrez votre age');
  callback1(name);
  callback2(age);
}

// saisie_nom(salutation, getAge);

function affiche_valeur_tableau(e) {
  console.log(e);
}

['nawfel', 'chreyd', 'anass'].forEach(affiche_valeur_tableau);
