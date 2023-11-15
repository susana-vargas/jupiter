export const  UserList = ({users}) => {
  <ul>
    {users.map((user) => (
        <li key={user.id}>
          <strong> Name:</strong> {user.name}, 
          <strong> Last Name:</strong> {user.lastName},
          <strong> Age:</strong> {user.age},
          <strong> Phone:</strong> {user.phone}, 
          <strong> E-mail</strong> {user.email}
        </li>
      ))}
    </ul>
};