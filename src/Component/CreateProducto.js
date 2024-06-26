import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './create.css';

const endpoint = 'http://localhost:8000/api/productos';

const CreateProducto = () => {
  const [Nombre, setNombre] = useState('');
  const [Precio, setPrecio] = useState(0);
  const [Proveedor, setProveedor] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [Cantidad, setCantidad] = useState(0);
  
  const navigate = useNavigate(); // Hook para navegación

  const store = async (e) => {
    e.preventDefault();
    try {
      // Realiza la petición POST para almacenar el producto
      await axios.post(endpoint, {
        Nombre: Nombre,
        Precio: Number(Precio),
        proveedor: Proveedor,
        Descripcion: Descripcion,
        Cantidad: Cantidad
      });
      
      // Después de guardar exitosamente, redirige a la página de productos
      navigate('/productos');
      
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  const handleSalir = () => {
    navigate('/'); // Redirige a la página principal al hacer clic en "Salir"
  };

  return (
    <div className="wraper">
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
        <label className="input-boxx">Nombre</label>
        <input
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          type='text'
          className="form-control"
        />
        <label className="input-boxx">Precio</label>
        <input
          value={Precio}
          onChange={(e) => setPrecio(e.target.value)}
          type='number'
          className="form-control"
        />
        <label className="input-boxx">Proveedor</label>
        <input
          value={Proveedor}
          onChange={(e) => setProveedor(e.target.value)}
          type='text'
          className="form-control"
        />
        <label className="input-boxx">Descripción</label>
        <input
          value={Descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          type='text'
          className="form-control"
        />
        <label className="input-boxx">Cantidad</label>
        <input
          value={Cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          type='number'
          className="form-control"
        />
        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
      <button type='submit' className='btn btn-primary'onClick={handleSalir}>Salir</button>
    </div>
  );
};

export default CreateProducto;
