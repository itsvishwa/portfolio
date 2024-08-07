import logo from "./../assets/logo.png";

function Navigation() {
  return (
    <div className="flex flex-row justify-between items-center">
      <img src={logo} alt="Logo" className="object-contain h-16" />
      <div className="flex flex-row gap-8">
        <p className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300">
          About
        </p>
        <p className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300">
          Education
        </p>
        <p className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300">
          Projects
        </p>
        <p className="text-white hover:cursor-pointer bg-gradient-to-r from-[#ff007b] to-[#ff2a9c] bg-clip-text hover:text-transparent transition duration-300">
          Contact
        </p>
      </div>
    </div>
  );
}

export default Navigation;
