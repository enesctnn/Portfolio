import { PROJECTS } from '../../config/projects';
import { Card } from '../ui/card';
import ProjectArticle from './ProjectArticle';

function Projects() {
  return (
    <Card locationName="projects" role="list">
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
