import { useState, useEffect } from 'react';
import './List.css';

function List() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'Max',
      lastName: 'Miller',
      email: 'maxmiller@example.com',
    },
    {
      id: 2,
      firstName: 'Erika',
      lastName: 'miller',
      email: 'erikamiller@example.com',
    },
  ]);

  useEffect(() => {
    // fetch('http://localhost:8001/api/contacts')
    //   .then((response) => response.json())
    //   .then((data) => setContacts(data));
  }, []);

  return (
    <>
      <h1 style={{ textDecoration: 'underline' }}>Contact list</h1>
      <table className="contactTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>First anme</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
