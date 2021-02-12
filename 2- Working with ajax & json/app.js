// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load Single Customer
// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);

//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById('customer').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// // Load Customers
// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);

//       const customers = JSON.parse(this.responseText);

//       let output = '';

//       customers.forEach(function (customer) {
//         output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       });

//       document.getElementById('customers').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

const customer = document
  .getElementById('button1')
  .addEventListener('click', loadCustomer);

const customers = document
  .getElementById('button2')
  .addEventListener('click', loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // conversion de la reponse vers un objet javascript
      const response = JSON.parse(xhr.response);
      console.log(response);
      const ul = document.createElement('ul');

      ul.innerHTML = `
        <li>${response.id}</li>
        <li>${response.name}</li>
        <li>${response.phone}</li>
        <li>${response.company}</li>
      `;

      document.getElementById('customer').appendChild(ul);
    }
  };

  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const customers = JSON.parse(xhr.response);
      console.log(customers);
      const ul = document.createElement('ul');

      for (let c of customers) {
        ul.innerHTML += `
        <li>${c.id}</li>
        <li>${c.name}</li>
        <li>${c.phone}</li>
        <li>${c.company}</li>
        `;
      }

      document.getElementById('customers').appendChild(ul);
    }
  };
  xhr.send();
}
