import React from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import TopButton from '../../components/topButton/TopButton.jsx';
import SkillsSet from './SkillsSet.jsx';
import {hobbies,idioms,languages,softSkills} from '../../portfolio.jsx';
import './aboutMe.css';
export default function AboutMeComponent({theme}) {
 return <div className="about-main"><Header theme={theme}/><main className="basic-about">
 <div className="heading-div-about"><div className="heading-text-div-about"><h1 className="heading-text-about" style={{color:theme.orange}}>Sobre mim</h1><p className="heading-sub-text-about"><b>Soft Skills, Idiomas, Linguagens e Hobbies</b></p></div></div>
 <div className="heading-div-about2 about-reference"><div>
 <p className="personal-facts"><strong>Data de nascimento:</strong> <time dateTime="1997-02-06">6 de fevereiro de 1997</time><br/><strong>Origem:</strong> Rio de Janeiro, Rio de Janeiro, Brasil</p>
 <SkillsSet name="Principais linguagens de programação" skills={languages}/>
 <SkillsSet name="Idiomas" skills={idioms}/>
 </div><div><h3>Principais Soft Skills</h3><div className="soft-skills">{softSkills.map(skill=><span key={skill}>{skill}</span>)}</div>
 <h3 className="hobbies-title">Meus hobbies e interesses</h3><ul className="hobby-icons" aria-label="Hobbies e interesses">{hobbies.map(hobby=><li key={hobby.name} title={hobby.name}><span role="img" aria-label={hobby.name}>{hobby.symbol}</span></li>)}</ul>
 </div></div></main><Footer theme={theme}/><TopButton theme={theme}/></div>;
}
