import { useState } from "react";
import { v4 } from "uuid";

import { UserForm } from "./UserForm";
import { UserList } from "./UserList";

export const User = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  } 
  const handleLastNameInputChange = (event) => {
    setLastName(event.target.value);
  }
  const handleAgeInputChange = (event) => {
    setAge(event.target.value);
  }
  const handlePhoneInputChange = (event) => {
    setPhone(event.target.value);
  }
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  }
  
  const addRecord = (event) => {
    event.preventDefault();
    const nuevoUsuario = {
      id: v4(),
      name,
      lastName,
      age,
      phone,
      email,
    };
    setUsers([...users, nuevoUsuario]);
    // console.log(users);
    setName('');
    setLastName('');
    setAge('');
    setPhone('');
    setEmail('');
  }
  return (
    <>
    <h1>user's form</h1>
    <UserForm
    name={name}
    lastName={lastName}
    age={age}
    phone={phone}
    email={email}
    handleNameInputChange={handleNameInputChange}
    handleLastNameInputChange={handleLastNameInputChange}
    handleAgeInputChange={handleAgeInputChange}
    handlePhoneInputChange={handlePhoneInputChange}
    handleEmailInputChange={handleEmailInputChange}
    addRecord={addRecord}
    />
    <UserList users={users} />
    </>
  )
}
