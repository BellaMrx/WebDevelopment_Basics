const data = [
  {
    id: 1,
    firstName: 'Max',
    lastName: 'Miller',
    email: 'maxmiller@example.com',
  },
  {
    id: 2,
    firstName: 'Erika',
    lastName: 'Taylor',
    email: 'erikataylor@example.com',
  },
];

function List() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
