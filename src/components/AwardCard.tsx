interface Props {
  title: string;
  organized: string;
  description: string;
}

function AwardCard({ title, organized, description }: Props) {
  return (
    <div className="px-8 py-4 bg-gradient-to-r from-[#151515] via-[#212121] to-[#1f1f1f] hover:shadow-lg hover:shadow-[#139B43] transition duration-700 rounded-lg">
      <p className="font-bold ">{title}</p>
      <p className="opacity-40 text-sm">Organized by {organized}</p>
      <p className="mt-4 opacity-60">{description}</p>
    </div>
  );
}

export default AwardCard;
