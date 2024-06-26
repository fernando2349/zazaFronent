import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
import Navbar from './Navbar';

const endpoint = 'http://localhost:8000/api/clientes'; // Cambia este endpoint si es necesario

const RegistroCliente = () => {
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Contraseña, setContraseña] = useState('');

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, {
        Nombre: Nombre,
        apellido: Apellido,
        direccion: Direccion,
        phone: Phone,
        email: Email,
        contraseña: Contraseña
      });
      navigate('/Login');
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <>
     <Navbar/> {/* Aquí se inserta el componente de navegación */}
    <div className="wrapper">
      <h2>Crear Cliente</h2>
      <form onSubmit={store}>
        <div className="input-box">
          <input
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            type='text'
            placeholder="Nombre"
            required
          />
        </div>
        <div className="input-box">
          <input
            value={Apellido}
            onChange={(e) => setApellido(e.target.value)}
            type='text'
            placeholder="Apellido"
            required
          />
        </div>
        <div className="input-box">
          <input
            value={Direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type='text'
            placeholder="Dirección"
            required
          />
        </div>
        <div className="input-box">
          <input
           value={Phone}
           onInput={(e) => {
             const value = e.target.value;
             if (/^\d*$/.test(value)) {
               setPhone(value);
             }
           }}
           type='tel'
           placeholder="Phone"
           required
          />
        </div>
        <div className="input-box">
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            value={Contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            type='password'
            placeholder="Contraseña"
            required
          />
        </div>
        <button type='submit'>Guardar</button>
      </form>
    </div>
    </>
  );
};

export default RegistroCliente;
