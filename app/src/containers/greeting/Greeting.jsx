import {useLanguage} from '../../i18n.jsx';
import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button.jsx";
import {Fade} from "react-awesome-reveal";
import BannerImg from "./BannerImg.jsx";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";

export default function Greeting(props) {
    const {t,locale,portfolio}=useLanguage();
    const {greeting, competitiveSites}=portfolio;
    const theme = props.theme;
    return (
        <Fade direction={"up"} duration={2000} triggerOnce={true}>
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <h1 className="greeting-text" style={{color: theme.orange}}>
                            {greeting.title}
                        </h1>
                        <div className={"greeting-name"}>
                            <h1 className="greeting-sub" style={{color: theme.grayText}}>
                                {t('Sou')}
                            </h1>
                            <h1 className="greeting-sub">
                                {greeting.sub}
                            </h1>
                        </div>
                        <h1 className="greeting-typewriter" style={{color: theme.blue, whiteSpace: "pre-wrap"}}>
                            <Typewriter key={locale}
                                onInit={(typewriter) => {
                                    typewriter.typeString(t("Suporte Aplicacional")).pauseFor(1500).deleteAll().typeString(t("Full-Stack Developer")).pauseFor(1500).deleteAll().typeString(t("Team Lead")).pauseFor(1500).deleteAll().start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <span
                            className="greeting-text-span subTitle"
                            style={{color: theme.text}}>
                <div className="entities">{t('Profissional de ')}<b style={{color: theme.blue}}>{t('Suporte Aplicacional e Suporte de TI L2/L3')}</b>{t(', com experiência em ')}<b style={{color: theme.orange}}>{t('desenvolvimento Full Stack, pipelines de dados em Python e liderança de equipas')}</b>{t('. Atuo na investigação de incidentes, análise de logs e SQL, suporte a APIs e integrações e coordenação de equipas técnicas.')}</div>
              </span>
                        <CompetitiveSites logos={competitiveSites.competitiveSites}/>
                        <div className="button-greeting-div">
                            <Button text={t('Contacto')} href="/contact"/>
                            <a className="main-button" href="cv.html" target="_blank" rel="noopener noreferrer">{t('Meu CV')}</a>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <BannerImg className={"under"}/>
                        <div className="over monogram-portrait" aria-label={t('Monograma de Gabriel Faria')}>GF</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
