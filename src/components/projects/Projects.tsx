import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../config/projects';
import { Card } from '../ui/card';
import { ProjectArticle } from './ProjectArticle';

function Projects() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero.navigation' });
  return (
    <Card locationName="projects" role="list" title={t('projects')}>
      <ul className="space-y-10">
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
      </ul>
    </Card>
  );
}

export default Projects;
