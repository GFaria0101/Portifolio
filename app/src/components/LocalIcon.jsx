import React from 'react';
import {Icon} from '@iconify/react';
import git from '@iconify/icons-logos/git-icon';
import java from '@iconify/icons-logos/java';
import python from '@iconify/icons-logos/python';
import docker from '@iconify/icons-logos/docker-icon';
import postgres from '@iconify/icons-logos/postgresql';
import mongo from '@iconify/icons-logos/mongodb-icon';
import jiraIcon from '@iconify/icons-logos/jira';
import confluenceIcon from '@iconify/icons-logos/confluence';
import apacheIcon from '@iconify/icons-logos/apache';
import quarkusIcon from '@iconify/icons-logos/quarkus';
import reactIcon from '@iconify/icons-logos/react';
import nextjsIcon from '@iconify/icons-logos/nextjs-icon';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import openlayersIcon from '@iconify/icons-logos/openlayers';
const icons={'logos-jira':jiraIcon,'logos-confluence':confluenceIcon,'logos-apache':apacheIcon,'logos-quarkus':quarkusIcon,'logos-react':reactIcon,'logos-nextjs':nextjsIcon,'logos-typescript':typescriptIcon,'logos-openlayers':openlayersIcon,'logos-git-icon':git,'logos-java':java,'logos-python':python,'logos-docker-icon':docker,'logos-postgresql':postgres,'logos-mongodb-icon':mongo};
export default function LocalIcon({name}) { return icons[name] ? <Icon icon={icons[name]}/> : <span aria-hidden="true">J</span>; }
