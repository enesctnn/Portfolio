import { cn } from '../../lib/utils';
import { ExternalLinkArrow } from '../ui/external-link-arrow';
import { HoverCard } from '../ui/hover-card';
import { ProjectDescription } from './ProjectDescription';
import { TechnologiesUsed } from './Technologies';

export const ProjectArticle = ({
  title,
  technologies,
  projectLink,
  img,
  description,
}: {
  projectLink: string;
  title: string;
  description: { tr: string; en: string };
  img: { src: string; alt: string; gif?: string };
  date?: string;
  technologies?: string[];
}) => (
  <HoverCard href={projectLink} role="listitem" className="gap-3 ">
    <div className="relative py-1 max-lg:aspect-video">
      <img
        src={img.src}
        alt={img.alt}
        className={cn(
          'absolute z-0 h-full w-full scale-100 rounded-md object-contain object-center transition-all duration-500 ease-in-out',
          img?.gif &&
            'group-hover:z-0 group-hover:scale-110 group-hover:opacity-0 group-hover:blur-md'
        )}
        loading="lazy"
      />
      {img.gif && (
        <img
          src={img.gif}
          alt={img.alt}
          className="absolute z-0 h-full w-full scale-110 rounded-md object-contain object-center opacity-0 blur-md transition-all duration-500 ease-in-out group-hover:z-10 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none"
          loading="lazy"
        />
      )}
    </div>
    <div className="flex flex-col gap-y-2">
      <ExternalLinkArrow title={title} />
      <ProjectDescription description={description} />
      {technologies && <TechnologiesUsed technologies={technologies} />}
    </div>
  </HoverCard>
);
