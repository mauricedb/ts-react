import React, { Component, ComponentType, ErrorInfo } from 'react';

type ErrorBoundaryState = {
  error: Error | null;
};

export default function withErrorBoundary<P>(
  WrappedComponent: ComponentType<P>
) {
  return class ErrorBoundary extends Component<P, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
      error: null
    };

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
      console.warn(
        `Error:\n\t${error}\nComponent stack:${info.componentStack}`
      );
    }

    render() {
      const { error } = this.state;

      if (error) {
        return (
          <div className="error">
            <h2>Error: {error.message}</h2>
            <p>{error.stack}</p>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
