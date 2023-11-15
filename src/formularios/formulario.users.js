import { useState } from "react";

export const User = () => {
  const [usuarios, setUsuarios] = useState([])
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState();
  const [telefono, setTelefono] = useState();

  const entraNombre = (event) => {
    setNombre(event.target.value);
  }
  
  const entraApellido = (event) => {
    setApellido(event.target.value);
  }

  const entraEdad = (event) => {
    setEdad(event.target.event);
  }
  const entraTelefono = (event) => {
    setTelefono(event.target.event);
  }
  const envioDatos = (event) => {
    event.preventDefault();
    const nuevoUsuario = {nombre, apellido, edad, telefono};
    setUsuarios([...usuarios, nuevoUsuario]);
    console.log('Enviado');
    setNombre('');
    setApellido('');
    setEdad('');
    setTelefono('');
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
      <button type="submit">Registrar</button>
    </form>
    <ul>
    {usuarios.map((usuario, index) => (
        <li key={index}>
          <strong>Nombre:</strong> {usuario.nombre}, <strong>Apellido:</strong> {usuario.apellido}, <strong>Edad:</strong> {usuario.edad}, <strong>Telefono:</strong> {usuario.telefono}
        </li>
      ))}
    </ul>

    </>
  )
}
