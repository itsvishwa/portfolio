import About from "./components/About";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ScrollDownIcon from "./components/ScrollDownIcon";
import Skills from "./components/Skills";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import Volunteering from "./components/Volunteering";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="relative bg-[#131313] text-white w-full h-screen overflow-hidden">
      <ShootingStars className="absolute top-0 left-0 w-full h-full z-0" />
      <StarsBackground className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative px-72 z-10 h-full overflow-y-auto">
        <div className="min-h-screen py-8 w-full flex flex-col justify-between">
          <Navigation />
          <Welcome />
          <ScrollDownIcon />
        </div>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Volunteering />
      </div>
    </div>
  );
}
