import About from '../about/About';
import Projects from '../projects/Projects';

export const HeroContentWrapper = () => (
  <div className="flex flex-col gap-y-20 max-lg:pb-24 lg:ml-auto lg:pt-24">
    <About />
    <Projects />
  </div>
);
