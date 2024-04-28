import { About } from './components/about/About';
import Hero from './components/hero/Hero';
import TopMenu from './components/menu/TopMenu';
import Projects from './components/projects/Projects';
import { MaxWidthWrapper } from './components/ui/max-width-wrapper';

export default function App() {
  return (
    <>
      <TopMenu />
      <MaxWidthWrapper className="flex flex-col gap-14 max-lg:flex-col ">
        <Hero />
        <div className="flex h-[1200px] flex-col gap-y-5 lg:ml-auto lg:mt-20 lg:w-7/12">
          <About />
          <Projects />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
