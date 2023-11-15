import { useState } from "react";

export const User = () => {
  const [usuarios, setUsuarios] = useState([])
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const entraNombre = (event) => {
    setNombre(event.target.value);
  } 
  const entraApellido = (event) => {
    setApellido(event.target.value);
  }
  const entraEdad = (event) => {
    setEdad(event.target.value);
  }
  const entraTelefono = (event) => {
    setTelefono(event.target.value);
  }
  const entraEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const envioDatos = (event) => {
    event.preventDefault();
    const nuevoUsuario = {nombre, apellido, edad, telefono, email};
    setUsuarios([...usuarios, nuevoUsuario]);
    console.log('Enviado');
    setNombre('');
    setApellido('');
    setEdad('');
    setTelefono('');
    setEmail('');
  }
  return (
    <>
    <h2>Formulario para Usuarios</h2>

    <form onSubmit={envioDatos}>
      <label>Nombre:
        <input type={"text"} value={nombre} onChange={entraNombre}/>
      </label>
      <label>Apellido:
        <input type={"text"} value={apellido} onChange={entraApellido}/>
      </label>
      <label>Edad: 
        <input type={"number"} value={edad} onChange={entraEdad}/>
      </label>
      <label>Telefono: 
        <input type={"number"} value={telefono} onChange={entraTelefono}/>
      </label>
      <label>E-mail:
        <input type={"email"} value={email} onChange={entraEmail}/>
      </label>
      <button type="submit">Registrar</button>
    </form>
    <ul>
    {usuarios.map((usuario, index) => (
        <li key={index}>
          <strong>Nombre:</strong> {usuario.nombre}, 
          <strong>Apellido:</strong> {usuario.apellido},
          <strong>Edad:</strong> {usuario.edad}, 
          <strong>Telefono:</strong> {usuario.telefono}, 
          <strong>E-mail</strong> {usuario.email}
        </li>
      ))}
    </ul>
    
    </>
  )
}
