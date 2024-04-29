import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../config/projects';
import { Card } from '../ui/card';
import { ProjectArticle } from './ProjectArticle';

function Projects() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero.navigation' });
  return (
    <Card locationName="projects" role="list" title={t('projects')}>
      {PROJECTS.map(project => (
        <ProjectArticle
          key={project.href}
          projectLink={project.href}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          img={project.img}
        />
      ))}
    </Card>
  );
}

export default Projects;
