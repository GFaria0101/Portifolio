import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button.jsx";
import {greeting} from "../../portfolio.jsx";
import {Fade} from "react-awesome-reveal";
import BannerImg from "./BannerImg.jsx";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites.jsx";
import {competitiveSites} from "../../portfolio.jsx";

export default function Greeting(props) {
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
                                Sou
                            </h1>
                            <h1 className="greeting-sub">
                                {greeting.sub}
                            </h1>
                        </div>
                        <h1 className="greeting-typewriter" style={{color: theme.blue, whiteSpace: "pre-wrap"}}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("Application Support").pauseFor(1500).deleteAll().typeString("IT Support L2/L3").pauseFor(1500).deleteAll().typeString("Sistemas e Automação").pauseFor(1500).deleteAll().start();
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
                <div className="entities">Profissional de <b style={{color: theme.blue}}>Application Support e IT Support L2/L3</b>, com experiência em <b style={{color: theme.orange}}>sistemas, infraestrutura e automação</b>. Atuo na investigação de incidentes, análise de logs e SQL, suporte a APIs e integrações e coordenação de equipas técnicas.</div>
              </span>
                        <CompetitiveSites logos={competitiveSites.competitiveSites}/>
                        <div className="button-greeting-div">
                            <Button text="Contacto" href="/contact"/>
                            <Button text="Minha experiência" href="/education"/>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <BannerImg className={"under"}/>
                        <div className="over monogram-portrait" aria-label="Monograma de Gabriel Faria">GF</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
