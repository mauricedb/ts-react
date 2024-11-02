import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AppNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        React & TypeScript
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/counter">
          Counter
        </Nav.Link>
        <Nav.Link as={Link} to="/person">
          Person
        </Nav.Link>
        <Nav.Link as={Link} to="/movies">
          Movies
        </Nav.Link>
        <Nav.Link as={Link} to="/movie-editor">
          Movie Editor
        </Nav.Link>
        <Nav.Link as={Link} to="/shape-editor">
          Shape Editor
        </Nav.Link>
        <Nav.Link as={Link} to="/links">
          Links
        </Nav.Link>
      </Nav>
      <Nav />
    </Navbar>
  );
};
