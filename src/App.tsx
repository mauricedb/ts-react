import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';

import { withErrorBoundary } from './movies/withErrorBoundary';
import { AppRoutes } from './AppRoutes';
import { AppNavBar } from './AppNavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <CypressHistorySupport />
          <AppNavBar />
          <header className="text-center">
            <h1>React & TypeScript</h1>
          </header>
          <AppRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

export default withErrorBoundary(App);
