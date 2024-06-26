import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowProducto = () => {
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProductos();
  }, []);
  /*useEffect((e) => {
    selectproducto(e);
  }, [e]);*/

  const getAllProductos = async () => {
    try {
      const response = await axios.get(`${endpoint}/productos`);
      setProductos(response.data.productos); // Ajusta según la respuesta de tu API
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setError('Error al obtener los productos. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  const selectproducto = (e) => {
    setProductosSeleccionados ([...productosSeleccionados,e])
    setProductos(productos.filter(p => p !== e))
  }
  return (
    <div className='d-grid gap-2'>
      <Link to="/CreateProducto" className='btn btn-success btn-lg mt-2 mb-2 text-white'>
        Create
      </Link>

      {error && <p className="text-danger">{error}</p>}

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Proveedor</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.Nombre}</td>
              <td>{producto.Precio}</td>
              <td>{producto.proveedor}</td>
              <td>{producto.Descripcion}</td>
              <td>{producto.Cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducto;
