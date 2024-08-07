interface Props {
  title: string;
  description: string;
}

function VolunteeringCard({ title, description }: Props) {
  return (
    <div>
      <p className="font-bold mb-2 text-lg">{title}</p>
      <p className="opacity-60">{description}</p>
    </div>
  );
}

export default VolunteeringCard;
