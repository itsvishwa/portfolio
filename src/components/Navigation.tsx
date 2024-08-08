import logo from "./../assets/logo.png";

function Navigation() {
  return (
    <div className="flex flex-row justify-center lg:justify-between items-center">
      <img src={logo} alt="Logo" className="object-contain h-16" />
      <div className="lg:flex flex-row gap-8 hidden">
        <a
          href="#about"
          className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300"
        >
          About
        </a>
        <a
          href="#education"
          className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300"
        >
          Education
        </a>
        <a
          href="#projects"
          className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navigation;
