export const TechnologiesUsed = ({
  technologies,
}: {
  technologies: string[];
}) => (
  <div
    className="flex w-full flex-wrap gap-1"
    aria-label="technologies used in related project"
  >
    {technologies.map(feature => (
      <p
        key={feature}
        className="w-max rounded-full bg-nyanza-100 px-2 py-[6px] text-xs text-nyanza max-lg:text-base"
      >
        {feature}
      </p>
    ))}
  </div>
);
