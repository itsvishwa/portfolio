interface Props {
  title: string;
  organized: string;
  description: string;
}

function AwardCard({ title, organized, description }: Props) {
  return (
    <div className="px-8 py-4 bg-[#1d1d1d] rounded-lg">
      <p className="font-bold ">{title}</p>
      <p className="opacity-40 text-sm">Organized by {organized}</p>
      <p className="mt-4 opacity-60">{description}</p>
    </div>
  );
}

export default AwardCard;
