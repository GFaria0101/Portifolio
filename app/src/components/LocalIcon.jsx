import React from 'react';
import {Icon} from '@iconify/react';
import git from '@iconify/icons-logos/git-icon';
import java from '@iconify/icons-logos/java';
import python from '@iconify/icons-logos/python';
import docker from '@iconify/icons-logos/docker-icon';
import postgres from '@iconify/icons-logos/postgresql';
import mongo from '@iconify/icons-logos/mongodb-icon';
const icons={'logos-git-icon':git,'logos-java':java,'logos-python':python,'logos-docker-icon':docker,'logos-postgresql':postgres,'logos-mongodb-icon':mongo};
export default function LocalIcon({name}) { return icons[name] ? <Icon icon={icons[name]}/> : <span aria-hidden="true">J</span>; }
