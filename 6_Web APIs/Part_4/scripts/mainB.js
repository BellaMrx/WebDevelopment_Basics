function createTable(persons) {
    // select container element
    const container = document.getElementById('container');
    // create table
    const table = document.createElement('table');
    // create table header
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>First Name</th><th>Last Name</th><th>Profession</th>';
  
    // create table body
    const tbody = document.createElement('tbody');
    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          ${person.firstName}
        </td>
        <td>
          ${person.lastName}
        </td>
        <td>
          ${person.profession}
        </td>
      `;
      tbody.appendChild(tr);
    }
  
    // add header to table
    table.appendChild(thead);
    // add table body to table
    table.appendChild(tbody);
    // add table body to container
    container.appendChild(table);
  }
  
  // registration of the eventlisterner
  document.addEventListener('DOMContentLoaded', (event) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data/persons.json', true);
    request.responseType = 'json';
    request.setRequestHeader('Accept', 'application/json');
    request.addEventListener('load', () => {
      if (request.status === 200) {
        let persons;
        if (request.responseType === 'json') {
          persons = request.response;
        } else {
          persons = JSON.parse(request.responseText);
        }
        createTable(persons);
      }
    });
    request.send();
  });


// ------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', async (event) => {
//    const config = {
//        method: 'GET', 
//        headers: {
//            'Accept': 'application/json'
//        }
//    }
//    const response = await fetch('persons.json', config);
//    const persons = await response.json();
//    createTable(persons);
// });

// ------------------------------------------------------------------

