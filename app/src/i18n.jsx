import React,{createContext,useContext,useState,useLayoutEffect,useMemo} from 'react';
import translations from './locales/translations.json';
import * as original from './portfolio.jsx';
export const localeNames={pt:'Português',en:'English',es:'Español',fr:'Français'};
const storageKey='gabriel-portfolio-language';
export function translate(text,locale){
 if(typeof text!=='string'||locale==='pt') return text;
 if(text.startsWith('⚡ ')) return '⚡ '+translate(text.slice(2),locale);
 return translations[text]?.[locale]??text;
}
function localize(value,locale){
 if(typeof value==='string')return translate(value,locale);
 if(Array.isArray(value))return value.map(v=>localize(v,locale));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,localize(v,locale)]));
 return value;
}
export const LanguageContext=createContext({locale:'pt',t:text=>text,portfolio:original,setLocale:()=>{}});
export const useLanguage=()=>useContext(LanguageContext);
export function LanguageProvider({children}){
 const [locale,updateLocale]=useState(()=>{try{const saved=localStorage.getItem(storageKey);if(Object.hasOwn(localeNames,saved))return saved;}catch{}return 'pt';});
 const value=useMemo(()=>({locale,t:text=>translate(text,locale),portfolio:localize(original,locale),setLocale:next=>{if(!Object.hasOwn(localeNames,next))return;updateLocale(next);try{localStorage.setItem(storageKey,next);}catch{}}}),[locale]);
 useLayoutEffect(()=>{document.documentElement.lang=locale;},[locale]);
 return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
