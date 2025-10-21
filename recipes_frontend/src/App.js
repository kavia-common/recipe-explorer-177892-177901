import React, { useState, useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn235 from './pages/SignIn235';

/**
 * Minimal client-side router without adding dependencies.
 * - Uses window.location.hash for routing.
 * - Supports two routes: "/" and "/sign-in"
 */

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const content = useMemo(() => {
    // Normalize route (ensure leading slash)
    const normalized = route.startsWith('/') ? route : `/${route}`;
    if (normalized === '/sign-in') {
      return <SignIn235 />;
    }
    return (
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{ marginTop: 24 }}>
          <a className="App-link" href="#/sign-in">Go to Sign In</a>
        </p>
      </header>
    );
  }, [route, theme]);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
