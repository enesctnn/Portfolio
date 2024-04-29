import Hero from '../hero/Hero';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { HeroContentWrapper } from './HeroContentWrapper';

const SectionedWrapper = () => (
  <MaxWidthWrapper className="flex h-[1400px] items-start gap-14 max-lg:flex-col">
    <Hero />
    <HeroContentWrapper />
  </MaxWidthWrapper>
);

export default SectionedWrapper;
