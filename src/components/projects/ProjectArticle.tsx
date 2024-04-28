import { cn } from '../../lib/utils';
import { ExternalLinkArrow } from '../ui/external-link-arrow';
import { HoverCard } from '../ui/hover-card';

function ProjectArticle({
  title,
  technologies,
  projectLink,
  img,
  date,
  description,
}: {
  projectLink: string;
  title: string;
  description: string;
  img?: { src: string; alt: string; gif?: string };
  date?: string;
  technologies?: string[];
}) {
  const truncateWithEllipses = (text: string, max: number) =>
    text.substring(0, max) + (text.length > max ? '...' : '');

  return (
    <HoverCard href={projectLink} role="listitem" className="gap-x-3">
      <div className="relative flex h-full items-start py-1">
        <p className="text-muted-foreground">{date}</p>
        <img
          src={img?.src}
          alt={img?.alt}
          className={cn(
            'absolute z-0 h-full rounded-md object-contain object-center transition-all duration-500 ease-in-out',
            img?.gif &&
              'group-hover:z-0 group-hover:opacity-0 group-hover:blur-md'
          )}
          loading="lazy"
        />
        {!!img?.gif && (
          <img
            src={img?.gif}
            alt={img?.alt}
            className="absolute z-0 h-full rounded-md object-contain object-center opacity-0 blur-md transition-all duration-500 ease-in-out group-hover:z-10 group-hover:opacity-100 group-hover:blur-none"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-col gap-y-1">
        <ExternalLinkArrow title={title} />
        <p className="whitespace-pre-line text-xs">
          {truncateWithEllipses(description, 360)}
        </p>
        <div
          className="mt-auto flex w-full flex-wrap gap-1"
          aria-label="technologies used:"
        >
          {technologies &&
            technologies.map(feature => (
              <p
                key={feature}
                className="w-max rounded-xl bg-nyanza-100 px-2 py-1 text-xs text-nyanza"
              >
                {feature}
              </p>
            ))}
        </div>
      </div>
    </HoverCard>
  );
}

export default ProjectArticle;
