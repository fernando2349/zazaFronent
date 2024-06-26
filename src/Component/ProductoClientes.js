import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ProductoClientes = () => {
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProductos();
  }, []);

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
    setProductosSeleccionados([...productosSeleccionados, e]);
    setProductos(productos.filter(p => p !== e));
  };

  const deleteproducto = (e) => {
    setProductos([...productos, e]);
    setProductosSeleccionados(productosSeleccionados.filter(p => p !== e));
  };

  const handleCompra = () => {
    alert(' Gracias por su compra, Lo llamaremos en un momento');
    navigate('/');
  };

  return (
    <div className='d-grid gap-2'>
      <Link to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'>
        Salir
      </Link>

      {error && <p className="text-danger">{error}</p>}

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Proveedor</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
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
              <td>
                <button onClick={() => selectproducto(producto)} className='btn btn-info'>
                  Seleccionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Proveedor</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosSeleccionados.map((productosSeleccionados) => (
            <tr key={productosSeleccionados.id}>
              <td>{productosSeleccionados.Nombre}</td>
              <td>{productosSeleccionados.Precio}</td>
              <td>{productosSeleccionados.proveedor}</td>
              <td>{productosSeleccionados.Descripcion}</td>
              <td>{productosSeleccionados.Cantidad}</td>
              <td>
                <button onClick={() => deleteproducto(productosSeleccionados)} className='btn btn-info'>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {productosSeleccionados.length > 0 && (
        <button onClick={handleCompra} className='btn btn-success btn-lg '>
          Comprar
        </button>
      )}
    </div>
  );
};

export default ProductoClientes;
