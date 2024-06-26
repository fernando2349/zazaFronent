import axios from "axios";
import React, { useState } from "react";
import { FaUserAlt, FaLock} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import './Login.css'


const endpoint = 'http://localhost:8000/api/clientes/login';

const LoginForm = () => {
  const [email, setemail] = useState('');
  const [contraseña, setcontraseña] = useState('');
  const navigate = useNavigate();
  
  const store = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(endpoint, {
        email: email,
        contraseña: contraseña,
      });

      if (result.status == 200)
        {
         
          if(email == "admin@gmail.com")
            {
              navigate('/productos');
            
            }
            else{navigate('/ProductosCliente');}
        }
        else{
          alert("usuario invalido")
          console.log ("usuario invalido")
        }

    } catch (error) {
      alert("usuario invalido")
      console.error('Error al crear el producto:', error);
    }
  };


  return (
    <>
     <Navbar/> {/* Aquí se inserta el componente de navegación */}
    <div className="wrapper">
      <form onSubmit={store}>
        <h2>Login</h2>
        <div className="input-box">
          <input 
           value={email}
           onChange={(e) => setemail(e.target.value)}
          type="text" 
          placeholder="email"
           required/>
          
          <FaUserAlt className='icono'/>
        </div>
        <div className="input-box">
        <input 
           value={contraseña}
           onChange={(e) => setcontraseña(e.target.value)}
          type="text" 
          placeholder="contraseña"
           required/>
        <FaLock className='icono'/>
        </div>

        <div className="remember-forgot">
            <label><input type ="checkbox" />remember me</label>
            <a href="#"> forgot password</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
            <p>Don't have an accoint? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
