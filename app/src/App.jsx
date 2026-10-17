import React, {useState, useLayoutEffect} from 'react';
import './App.css';
import Main from './containers/Main.jsx';
import {ThemeProvider} from 'styled-components';
import {blackTheme, lightTheme} from './theme';
import {GlobalStyles} from './global';
import {ThemeContext} from './ThemeContext.jsx';
const preferenceKey = 'gabriel-portfolio-theme';
function initialTheme() {
  try {
    const saved = localStorage.getItem(preferenceKey);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch { /* Browsers may restrict storage; toggling still works. */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
export default function App() {
  const [mode, setMode] = useState(initialTheme);
  const theme = mode === 'dark' ? blackTheme : lightTheme;
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.body);
  }, [mode, theme]);
  function toggleTheme() {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    try { localStorage.setItem(preferenceKey, next); } catch { /* Optional persistence. */ }
  }
  return <ThemeContext.Provider value={{mode,toggleTheme}}><ThemeProvider theme={theme}>
    <GlobalStyles/><Main theme={theme}/>
  </ThemeProvider></ThemeContext.Provider>;
}
