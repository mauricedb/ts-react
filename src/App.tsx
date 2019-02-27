import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Person from './Person/Person';
import Movies from './movies/Movies';
import MovieEditor from './movie-editor/MovieEditor';
import ShapeEditor from './shape-editor/ShapeEditor';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1>React & TypeScript</h1>
        </header>
        {/* <Counter /> */}
        {/* <Counter amount={2} /> */}
        {/* <Person /> */}
        {/* <Movies /> */}
        <MovieEditor />
        {/* <ShapeEditor /> */}
      </div>
    );
  }
}

export default App;
