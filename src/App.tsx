import React, { Component } from 'react';
import Counter from './Counter/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <header className="text-center">
          <h1>React & TypeScript</h1>
        </header>
        <Counter />
        <Counter amount={2} />
      </div>
    );
  }
}

export default App;
