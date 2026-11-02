import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Last-resort error boundary: if the app throws during render, dismiss the
// HTML preloader (its removal effect lives inside App and never runs) and
// show a recoverable error screen instead of a blank page.
class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Application crashed:', error);
    const loader = document.getElementById('ashara-loader');
    if (loader) loader.remove();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 space-y-6 bg-white text-ashara-teal">
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold">Something went wrong</p>
          <h1 className="font-serif text-4xl font-light">The studio could not be loaded</h1>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-8 py-3 bg-ashara-teal hover:bg-ashara-teal/90 text-white text-xs tracking-[0.2em] uppercase rounded-full transition"
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>,
);
