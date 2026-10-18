/*!
 * Notice for code adapted from MarciaBM/marciabm.github.io.
MIT License

Copyright (c) 2021 Rohan Kokkula

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import React, {useState, useLayoutEffect} from 'react';
import './App.css';
import {LanguageProvider} from './i18n.jsx';
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
  return <LanguageProvider><ThemeContext.Provider value={{mode,toggleTheme}}><ThemeProvider theme={theme}>
    <GlobalStyles/><Main theme={theme}/>
  </ThemeProvider></ThemeContext.Provider></LanguageProvider>;
}
