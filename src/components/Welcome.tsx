import profileImg from "./../assets/profile.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./Button";

function Welcome() {
  const style: string =
    "text-2xl text-white hover:text-[#8f8f8f] hover:cursor-pointer ";
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-4 lg:gap-0">
      <div className="flex flex-col justify-center items-center lg:items-start gap-2">
        <p className="opacity-60 lg:text-start text-center">Hi there,</p>
        <p className="font-bold text-2xl lg:text-4xl lg:text-start text-center">
          I’m Vishwa Sandaruwan
        </p>
        <p className="text-sm lg:text-lg lg:text-start text-center">
          Software Engineer | R&D Enthusiast{" "}
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/itsvishwa/" target="_blank">
            <FaLinkedin className={style} />
          </a>
          <a href="https://github.com/itsvishwa" target="_blank">
            <FaGithub className={style} />
          </a>
          <a href="https://www.youtube.com/@TechMart404" target="_blank">
            <FaYoutube className={style} />
          </a>
          <a href="https://www.instagram.com/vishwa___s/" target="_blank">
            <AiFillInstagram className={style} />
          </a>
        </div>
        <Button />
      </div>
      <img
        src={profileImg}
        alt="Profile Image"
        className="object-contain lg:w-[480px] w-[200px]"
      />
    </div>
  );
}

export default Welcome;
