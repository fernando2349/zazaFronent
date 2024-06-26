import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import './Narbar.css';


function ColorSchemesExample() {
  /*const [user, setuser] = useState([]);*/

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='nose'>
          <Navbar.Brand href="/">ZAZA</Navbar.Brand>_________________________________________________________________________________________________________________________________________________________
          _______________
          ________________
          <Nav className="me-auto">
            <Link to='/Registro'>Registro</Link>________
            <Link to='/Login'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
} 

export default ColorSchemesExample;