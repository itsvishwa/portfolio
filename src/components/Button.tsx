import { FaDownload } from "react-icons/fa6";

function Button() {
  return (
    <div className="mt-4">
      <div className="inline-flex justify-center items-center gap-2 py-4 px-8 rounded-lg hover:cursor-pointer bg-gradient-to-r from-[#139B43] to-[#139b43] hover:from-[#139B43] hover:to-[#31ad5d] ">
        <FaDownload />
        Download CV
      </div>
    </div>
  );
}

export default Button;
