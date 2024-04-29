import About from '../about/About';
import Projects from '../projects/Projects';

export const HeroContentWrapper = () => (
  <div className="flex flex-col gap-y-20 lg:ml-auto lg:py-24">
    <About />
    <Projects />
  </div>
);
