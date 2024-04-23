import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {
    const [username, setUsername] = useState('');
    
    const handleUserName = (event) => {
        setUsername(event.target.value)
        if(username.toLowerCase().includes("o")){
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username.toLowerCase().includes("o") || username === ""){
            alert("Usuario inválido para registrarse")
        } else{
            alert("Usuario registrado correctamente")
        }
    }

  return (
    <div>
        <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value = {username}
        onChange={handleUserName}
      />
      <Button variant="primary" onClick={handleRegister}>Registrarse</Button>
      <p>{username}</p>
    </div>
  )
}

export default Login