import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Props {
  title: string;
  description: string;
}
function SkillCard({ title, description }: Props) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-lg"
      as="button"
      className="w-[448px] px-8 py-4 bg-[#1F1F1F] gap-2 rounded-lg flex flex-col items-start justify-center"
    >
      <p className="font-bold">{title}</p>
      <p className="text-start">{description}</p>
    </HoverBorderGradient>
  );
}

export default SkillCard;
