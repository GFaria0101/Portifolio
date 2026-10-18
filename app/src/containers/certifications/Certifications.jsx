import React from 'react';
import './Certifications.css';
import {useLanguage} from '../../i18n.jsx';
import CertificationCard from '../../components/certificationCard/CertificationCard.jsx';
export default function Certifications({theme}) {
 const {t,portfolio}=useLanguage();
 const certificates=portfolio.certifications.certifications;
 return <section className="main" id="certs" aria-labelledby="certs-heading">
 <h1 id="certs-heading" className="certs-header" style={{color:theme.text}}>{t('Certificações e Badges')}</h1>
 <div className="certs-body-div">{certificates.length?certificates.map(cert=><CertificationCard key={cert.title} certificate={cert} theme={theme}/>):<div className="certifications-pending">
 <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>
 <h2>{t('Certificações em andamento')}</h2><p>{t('Em breve, novidades por aqui.')}</p>
 </div>}</div></section>;
}
