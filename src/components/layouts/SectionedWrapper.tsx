import Hero from '../hero/Hero';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { HeroContentWrapper } from './HeroContentWrapper';

const SectionedWrapper = () => (
  <MaxWidthWrapper className="lg:grid lg:min-h-[1400px] items-start justify-evenly grid-cols-2 gap-10">
    <Hero />
    <HeroContentWrapper />
  </MaxWidthWrapper>
);

export default SectionedWrapper;
