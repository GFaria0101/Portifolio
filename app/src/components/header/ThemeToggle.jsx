import React from 'react';
import {usePortfolioTheme} from '../../ThemeContext.jsx';
export default function ThemeToggle() {
 const {mode,toggleTheme}=usePortfolioTheme();
 const dark=mode==='dark';
 const label=dark?'Ativar tema claro':'Ativar tema escuro';
 return <button type="button" className="theme-toggle" aria-label={label} title={label} aria-pressed={dark} onClick={toggleTheme}>
 <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">{dark?<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>:<path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z"/>}</svg>
 <span>{dark?'Claro':'Escuro'}</span></button>;
}
