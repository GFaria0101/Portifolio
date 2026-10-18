import React from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from '../../i18n.jsx';
import LanguageSelect from '../../components/header/LanguageSelect.jsx';
import ThemeToggle from '../../components/header/ThemeToggle.jsx';
import SeoHeader from '../../components/seoHeader/SeoHeader.jsx';
import './CV.css';
export default function CV(){
 const {t,portfolio}=useLanguage();
 return <article className="public-cv"><SeoHeader/><nav className="cv-tools"><Link to="/home">← {t('Voltar ao portfólio')}</Link><LanguageSelect/><ThemeToggle/><button type="button" className="cv-print" onClick={()=>window.print()}>{t('Imprimir / guardar em PDF')}</button></nav>
 <h1>Gabriel Faria da Silva</h1><p>{t('Suporte Aplicacional')} · Full Stack · {t('Team Lead')}</p>
 <div className="cv-profiles"><a href="https://www.linkedin.com/in/gabrielfaria0101/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/GFaria0101" target="_blank" rel="noopener noreferrer">GitHub</a></div>
 <h2>{t('Perfil profissional')}</h2><p>{t('Profissional de ')}{t('Suporte Aplicacional e Suporte de TI L2/L3')}{t(', com experiência em ')}{t('desenvolvimento Full Stack, pipelines de dados em Python e liderança de equipas')}{t('. Atuo na investigação de incidentes, análise de logs e SQL, suporte a APIs e integrações e coordenação de equipas técnicas.')}</p>
 <h2>{t('Competências')}</h2>{portfolio.skills.data.map(skill=><section key={skill.title}><h3>{skill.title}</h3><p className="cv-technologies">{skill.softwareSkills.map(tool=>tool.skillName).join(" · ")}</p><ul>{skill.skills.map(line=><li key={line}>{line.replace(/^⚡ /,'')}</li>)}</ul></section>)}
 <h2>{t('Experiência profissional')}</h2>{portfolio.resumeleft.left[0].data.map(job=><section key={job.title}><h3>{job.title}</h3><p>{job.date}</p>{job.content.map(line=><p key={line}>{line}</p>)}</section>)}
 {portfolio.resumeright.right.map(group=><React.Fragment key={group.title.join(' ')}><h2>{group.title}</h2>{group.data.map(entry=><section key={entry.title}><h3>{entry.title}</h3>{entry.subtitle&&<p>{entry.subtitle}{entry.date?' · '+entry.date:''}</p>}{!entry.subtitle&&entry.date&&<p>{entry.date}</p>}{entry.content.map(line=><p key={line}>{line}</p>)}</section>)}</React.Fragment>)}
 <h2>{t('Idiomas')}</h2><p>{portfolio.idioms.map(item=>`${item.name}: ${item.level}`).join(' · ')}</p></article>;
}
