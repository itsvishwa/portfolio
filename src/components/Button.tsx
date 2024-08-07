import { FaDownload } from "react-icons/fa6";

function Button() {
  return (
    <div className="mt-4">
      <div className="inline-flex justify-center items-center gap-2 py-4 px-8 rounded-lg hover:cursor-pointer bg-gradient-to-r from-[#79033C] to-[#bc035c] hover:from-[#79033C] hover:to-[#b42f6f] ">
        <FaDownload />
        Download CV
      </div>
    </div>
  );
}

export default Button;
