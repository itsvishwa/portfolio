import profileImg from "./../assets/profile.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./Button";

function Welcome() {
  const style: string =
    "text-lg text-white hover:text-[#ff2a9c] hover:cursor-pointer";
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-center gap-2">
        <p className="opacity-60">Hi there,</p>
        <p className="font-bold text-4xl">I’m Vishwa Sandaruwan</p>
        <p>Software Engineer | R&D Enthusiast </p>
        <div className="flex gap-4">
          <FaLinkedin className={style} />
          <FaGithub className={style} />
          <FaYoutube className={style} />
          <AiFillInstagram className={style} />
        </div>
        <Button />
      </div>
      <img
        src={profileImg}
        alt="Profile Image"
        className="object-contain w-96"
      />
    </div>
  );
}

export default Welcome;
