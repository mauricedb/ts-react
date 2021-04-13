import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { CypressHistorySupport } from 'cypress-react-router';

import { Counter } from './Counter/Counter';
import { Person } from './Person/Person';
import Movies from './movies/Movies';
import MovieEditor from './movie-editor/MovieEditor';
import ShapeEditor from './shape-editor/ShapeEditor';
import withErrorBoundary from './movies/withErrorBoundary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <CypressHistorySupport />
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
            </Nav>
            <Nav />
          </Navbar>
          <header className="text-center">
            <h1>React & TypeScript</h1>
          </header>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/person" component={Person} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie-editor" component={MovieEditor} />
            <Route path="/shape-editor" component={ShapeEditor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withErrorBoundary(App);
