import { WobbleCard } from "./ui/wobble-card";
import nexusImg from "./../assets/nexusmart.png";
import parkngo from "./../assets/parkngo.png";

function Projects() {
  return (
    <div id="projects" className="my-32">
      <p className="font-bold text-4xl mb-8">Projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-black-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              PARK’N GO - Parking Management System
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Developed a centralized, all-in-one software solution for the
              parking ecosystem in Sri Lanka. This comprehensive system includes
              mobile applications for drivers and parking officers, as well as
              web applications for companies and administrators. The solution is
              designed to streamline and optimize the current processes for all
              stakeholders, addressing inefficiencies and enhancing overall
              management and user experience.
            </p>
          </div>
          <img
            src={parkngo}
            width={540}
            height={540}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[20%] filter -bottom-8 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-pink-800 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Flower Exchange System
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            This project was developed under the guidance of LSEG, Sri Lanka,
            providing insights into stock market operations and the challenges
            encountered in creating a trading system. We implemented the system
            using algorithms such as Red-Black Trees (RBT) and gained valuable
            knowledge in techniques like concurrency control and multithreading,
            enhancing our understanding of efficient data management and
            transaction processing.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Portfolio
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Designed and developed a personal portfolio showcasing a collection
            of projects and accomplishments.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              NexusMart - E Commerce Platform
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Designed and developed to provide a seamless shopping experience,
              offering a wide range of products and features.
            </p>
          </div>
          <img
            src={nexusImg}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[30%] filter -bottom-16 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

export default Projects;
