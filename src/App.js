import React from 'react';
import Navbar from './Component/Navbar';
import ShowProducto from './Component/ShowProducto';
import CreateProducto from './Component/CreateProducto';
import Welcome from './Component/welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Registro from './Component/Registro';
import ProductoCliente from './Component/ProductoClientes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/ProductosCliente' element={<ProductoCliente/>}/>
        <Route path='/' element={<Navbar/>}/>
          <Route path='/' element={<Welcome/>} />
          <Route path='/productos/' element={<ShowProducto/>} />
          <Route path='/CreateProducto' element={<CreateProducto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




