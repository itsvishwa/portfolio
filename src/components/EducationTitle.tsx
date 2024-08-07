interface Props {
  title: string;
  institution: string;
  duration: string;
  description1: string;
  description2: string;
}
function EducationTitle({
  title,
  institution,
  duration,
  description1,
  description2,
}: Props) {
  return (
    <div className="text-white flex flex-row mb-4">
      <div className="w-80">
        <p className="font-bold text-xl">{title}</p>
        <p className="opacity-60">{institution}</p>
        <p className="opacity-60">{duration}</p>
      </div>
      <div className="w-[600px]">
        <p className="">{description1}</p>
        <p className="opacity-60">{description2}</p>
      </div>
    </div>
  );
}

export default EducationTitle;
