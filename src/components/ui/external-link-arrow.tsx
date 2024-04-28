import { RxArrowTopRight } from 'react-icons/rx';

export const ExternalLinkArrow = ({ title }: { title: string }) => {
  return (
    <div className="relative flex w-max items-center gap-x-2 text-2xl font-bold group-hover:text-nyanza-300">
      {title}
      <RxArrowTopRight
        size={16}
        className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>
  );
};
