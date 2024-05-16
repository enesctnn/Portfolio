import Hero from '../hero/Hero';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';
import { HeroContentWrapper } from './HeroContentWrapper';

const SectionedWrapper = () => (
  <MaxWidthWrapper className="grid-cols-2 items-start justify-evenly gap-10 lg:grid">
    <Hero />
    <HeroContentWrapper />
  </MaxWidthWrapper>
);

export default SectionedWrapper;
