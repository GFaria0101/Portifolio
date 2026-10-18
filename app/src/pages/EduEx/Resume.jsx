import React from 'react';
import {useLanguage} from '../../i18n.jsx';
import ResumeContent from './ResumeContent.jsx';
import './EducationComponent.css';
function TimelineGroups({groups}) {
 return groups.map(group=><section className="resume-group" key={group.title.join(' ')}><h2 className="resume-title">{group.title}</h2>{group.data.map(entry=><ResumeContent key={entry.subtitle+' '+entry.title} {...entry}/>)}</section>);
}
export default function Resume(){
 const {portfolio}=useLanguage();
 return <div className="resume-section"><div className="resume"><div className="heading-div2"><div className="resume-left"><TimelineGroups groups={portfolio.resumeleft.left}/></div><div className="resume-right"><TimelineGroups groups={portfolio.resumeright.right}/></div></div></div></div>;
}
