import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
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

      <div className="relative lg:px-72 px-8 z-10 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#189C46] scrollbar-track-[#131313] ">
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
        <Awards />
        <Contact />
        <div className="flex flex-row justify-center">
          <div className="relative w-[600px]">
            {/* Gradients */}
            <div className="absolute lg:inset-x-10 inset-x-8 top-0 bg-gradient-to-r from-transparent via-[#139B43] to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute lg:inset-x-20 inset-x-8 top-0 bg-gradient-to-r from-transparent via-[#139B43] to-transparent h-px w-3/4" />
            <div className="absolute lg:inset-x-60 inset-x-28 top-0 bg-gradient-to-r from-transparent via-[#046c28] to-transparent h-[5px] w-1/5 blur-sm" />
            <div className="absolute lg:inset-x-60 inset-x-28 top-0 bg-gradient-to-r from-transparent via-[#00ff59] to-transparent h-px w-1/4" />
          </div>
        </div>
        <div className="py-4 flex flex-row justify-center gradient-border-top">
          Made with ❤️ by Vishwa Sandaruwan
        </div>
      </div>
    </div>
  );
}
