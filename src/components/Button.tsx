import { FaDownload } from "react-icons/fa6";

function Button() {
  return (
    <div className="mt-4">
      <div className="inline-flex justify-center items-center gap-2 py-4 px-8 rounded-lg hover:cursor-pointer bg-gradient-to-r from-[#b70101] to-[#ff0101] hover:from-[#b70101] hover:to-[#ff3131] ">
        <FaDownload />
        Download CV
      </div>
    </div>
  );
}

export default Button;
