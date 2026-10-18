import {useLanguage} from '../../i18n.jsx';
import React from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import TopButton from '../../components/topButton/TopButton.jsx';
import './aboutMe.css';
export default function AboutMeComponent({theme}) {
    const {t,portfolio}=useLanguage();
    const {hobbies, idioms, languages, softSkills}=portfolio;
 return <div className="about-main"><Header theme={theme}/><main className="basic-about">
 <div className="heading-div-about"><div className="heading-text-div-about"><h1 className="heading-text-about" style={{color:theme.orange}}>{t('Sobre mim')}</h1><p className="heading-sub-text-about"><b>{t('Soft Skills, Idiomas, Linguagens e Hobbies')}</b></p></div></div>
 <div className="heading-div-about2 about-reference"><div>
 <p className="personal-facts"><strong>{t('Data de nascimento:')}</strong> <time dateTime="1997-02-06">{t('6 de fevereiro de 1997')}</time><br/><strong>{t('Origem:')}</strong> {t('Rio de Janeiro, Rio de Janeiro, Brasil')}</p>
 <section className="personal-languages"><h3>{t('Principais linguagens de programação')}</h3><ul className="programming-profiles">{languages.map(language=><li key={language.name}><span className="programming-name">{language.name}</span><span className="programming-usage">{language.usage}</span></li>)}</ul></section>
 <section className="spoken-languages"><h3>{t('Idiomas')}</h3><dl>{idioms.map(language=><div key={language.name}><dt>{language.name} <span className="language-level">({language.level})</span></dt><dd className="language-dots" aria-hidden="true">{Array.from({length:5},(_,index)=><span key={index} className={index<(language.level==='B1'?3:language.level==='A2'?2:5)?'level-dot filled':'level-dot'}/>)}</dd></div>)}</dl></section>
 </div><div><h3>{t('Principais Soft Skills')}</h3><div className="soft-skills">{softSkills.map(skill=><span key={skill}>{skill}</span>)}</div>
 <h3 className="hobbies-title">{t('Meus hobbies e interesses')}</h3><ul className="hobby-icons" aria-label={t('Hobbies e interesses')}>{hobbies.map(hobby=><li key={hobby.name} tabIndex={0} aria-label={hobby.name}><span className="hobby-symbol" aria-hidden="true">{hobby.symbol}</span><span className="hobby-tooltip" aria-hidden="true">{hobby.name}</span></li>)}</ul>
 </div></div></main><Footer theme={theme}/><TopButton theme={theme}/></div>;
}
