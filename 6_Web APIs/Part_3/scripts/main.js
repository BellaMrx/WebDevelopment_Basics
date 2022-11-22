const persons = [
    {
        firstName: 'Albert',
        lastName: 'Einstein',
        profession: 'Genius'
    },
    {
        firstName: 'Nikola',
        lastName: 'Tesla',
        profession: 'Inventor'
    },  
    {
        firstName: 'Elon',
        lastName: 'Musk',
        profession: 'Rich guy'
    }
];

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

}// registration of the eventlisterner
document.addEventListener('DOMContentLoaded', (event) => {
    createTable(persons);
  });




