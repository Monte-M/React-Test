const User = ({ name, email, address, phone, company }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{company}</td>
    </tr>
  );
};

export default User;
