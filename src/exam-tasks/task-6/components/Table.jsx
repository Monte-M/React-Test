import User from "./User";
import css from "./Table.module.css";
import { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, address, phone, company, id }) => (
          <User
            key={id}
            name={name}
            address={address.street + ", " + address.city}
            email={email}
            phone={phone}
            company={company.name}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
