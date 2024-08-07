import VolunteeringCard from "./VolunteeringCard";

function Volunteering() {
  return (
    <div className="my-32">
      <p className="font-bold text-4xl mb-8">Volunteering</p>
      <div className="flex flex-col gap-8">
        <VolunteeringCard
          title="Design Team Lead - Intellihack 2024"
          description="Served as the Design Team Lead for Intellihack 2024, a machine learning hackathon organized by the IEEE CS Chapter of UCSC. Successfully managed the design team, ensuring high-quality deliverables. Gained valuable experience in team management, collaborating with organizing committee members, and expanding knowledge in machine learning through interactions with industry experts."
        />
        <VolunteeringCard
          title="ER Junior Coordinator - UCSC Career Fair 2023"
          description="Worked as an Employee Relation Junior Coordinator for the UCSC Career Fair 2023, organized by fourth-year undergraduates in collaboration with the Professional Development Center of UCSC. Played a key role in facilitating the event, including the privilege of serving MillenniumIT ESP Staff, Sri Lanka. This role provided an excellent opportunity to network with industry professionals and enhance event coordination skills."
        />
        <VolunteeringCard
          title="Invigilator - National School Software Competition (NSSC) 2023"
          description="Volunteered as an Invigilator for the National School Software Competition (NSSC), organized by The Computer Society of Sri Lanka (CSSL) in collaboration with the UCSC ACM Student Chapter. This experience allowed me to interact with talented young students from various schools across the country, fostering a supportive and encouraging environment for the next generation of software developers."
        />
      </div>
    </div>
  );
}

export default Volunteering;
