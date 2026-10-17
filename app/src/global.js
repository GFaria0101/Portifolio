import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: ${({theme})=>theme===undefined?'light':theme.body==='#ffffff'?'light':'dark'};
    --themeBlue: ${({theme})=>theme.blue};
    --themeOrange: ${({theme})=>theme.orange};
    --page-background: ${({theme})=>theme.body};
    --page-text: ${({theme})=>theme.text};
    --muted-text: ${({theme})=>theme.grayText};
    --surface: ${({theme})=>theme.surface};
    --border: ${({theme})=>theme.border};
    --portrait: ${({theme})=>theme.portrait};
    --button-text: ${({theme})=>theme.buttonText};
    --hover: ${({theme})=>theme.hover};
  }
  *, *::after, *::before { box-sizing: border-box; }
  body {
    background: ${({theme})=>theme.body}; color: ${({theme})=>theme.text};
    margin:0; font-family:BlinkMacSystemFont,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
    transition: background-color .2s ease, color .2s ease;
  }
`;
