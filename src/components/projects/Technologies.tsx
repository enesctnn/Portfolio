export const TechnologiesUsed = ({
  technologies,
}: {
  technologies: string[];
}) => (
  <div
    className="mt-auto flex w-full flex-wrap gap-1 max-lg:mx-auto max-lg:w-4/5"
    aria-label="technologies used in related project"
  >
    {technologies.map(feature => (
      <p
        key={feature}
        className="w-max rounded-full bg-nyanza-100 px-2 py-[6px] text-xs text-nyanza max-lg:text-sm"
      >
        {feature}
      </p>
    ))}
  </div>
);
