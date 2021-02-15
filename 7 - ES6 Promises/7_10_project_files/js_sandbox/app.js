const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// function createPost(post) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function() {
//       posts.push(post);

//       const error = false;

//       if(!error) {
//         resolve();
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 2000);
//   });
// }

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof post === 'object') {
        posts.push(post);
        resolve();
      } else {
        reject('il faut passer un object');
      }
    }, 2000);
  });
}

// Afficher toutes les publications
function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost('dzajdklajz')
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });

// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(function (err) {
//     console.log(err);
//   });

function hello() {
  return new Promise(function (resolve, reject) {
    console.log('WHAT this ');
  });
}

hello().then();
