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
      className="lg:w-[448px] px-8 py-4 bg-gradient-to-r from-[#151515] via-[#212121] to-[#1f1f1f] gap-2 rounded-lg flex flex-col items-start justify-center"
    >
      <p className="font-bold">{title}</p>
      <p className="text-start">{description}</p>
    </HoverBorderGradient>
  );
}

export default SkillCard;
