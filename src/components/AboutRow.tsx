interface Props {
  title1: string;
  content1: string;
  title2: string;
  content2: string;
}

function AboutRow({ title1, content1, title2, content2 }: Props) {
  return (
    <div className="flex lg:flex-row lg:gap-32 flex-col gap-4">
      <div className="lg:w-80">
        <p className="opacity-40 text-sm">{title1}</p>
        <p>{content1}</p>
      </div>
      <div>
        <p className="opacity-40 text-sm">{title2}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
}

export default AboutRow;
