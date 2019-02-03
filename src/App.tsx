import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div>
        <header className="text-center">
          <h1>React & TypeScript</h1>
        </header>
        <Counter />
        <Counter amount={2} />
        <Person />
      </div>
    );
  }
}

export default App;
