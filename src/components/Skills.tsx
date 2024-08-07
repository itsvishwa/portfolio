import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="my-32">
      <p className="font-bold text-4xl mb-8">Skills</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <SkillCard
            title="Research and Development"
            description="Apply analytical thinking and imagination to drive innovation."
          />
          <SkillCard
            title="Web Development"
            description="Design and develop responsive, user-friendly web applications utilizing the latest technologies."
          />
        </div>
        <div className="flex flex-row justify-between">
          <SkillCard
            title="Mobile Development"
            description="Build high-performance, user-centric mobile applications using the latest technologies."
          />
          <SkillCard
            title="UI/UX Engineering"
            description="Craft intuitive and visually appealing UI/UX designs, focusing on user experience, and accessibility"
          />
        </div>
        <div className="flex flex-row justify-between">
          <SkillCard
            title="Adaptability"
            description="Quickly adapt to new technologies, mastering them within a short period to stay ahead in the industry."
          />
          <SkillCard
            title="Management"
            description="Effectively manage teams by identifying individual's skills to maximize productivity and collaboration."
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
