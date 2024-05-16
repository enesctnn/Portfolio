import About from '../about/About';
import ContactMe from '../contactme/ContactMe';
import Projects from '../projects/Projects';

export const HeroContentWrapper = () => (
  <div className="flex flex-col gap-y-32 pb-44 max-lg:px-10 max-sm:!px-2 lg:ml-auto lg:pt-24">
    <About />
    <Projects />
    <ContactMe />
  </div>
);
