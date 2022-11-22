import { useContext, useState } from 'react';
import { ContactContext } from './ContactContext';
const initialContact = {
  firstName: '',
  lastName: '',
  email: '',
};

function Form() {
  const [contacts, setContacts] = useContext(ContactContext);
  const [contact, setContact] = useState(initialContact);

  function handleSave(contact) {
    fetch(`http://localhost:8001/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    }).then((response) => {
      if (response.status === 201) {
        const id = response.headers.get('Location').split('/').pop();
        setContacts((prevContacts) => [...prevContacts, { ...contact, id }]);
      }
    });
  }

  function handleChange(e) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setContact((prevContact) => ({ ...prevContact, [key]: value }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave(contact);
        setContact(initialContact);
      }}
    >
      <label>
        First name:{' '}
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">save</button>
    </form>
  );
}

export default Form;
