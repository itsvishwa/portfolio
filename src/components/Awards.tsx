import AwardCard from "./AwardCard";

function Awards() {
  return (
    <div className="my-32">
      <p className="font-bold lg:text-4xl text-2xl mb-8">Awards</p>
      <div className="flex flex-col gap-4">
        <AwardCard
          title="RevolUX 3.0 - 5th Place"
          organized="AIESEC in University of Colombo and IEEE Student Branch of UCSC"
          description="Secured 5th place in the final round of RevolUX 3.0, a UI/UX design competition."
        />
        <AwardCard
          title="Codefest Algothon 2023 - 2nd Runner UP"
          organized="SLIIT"
          description="Algothon was an inter-university competitive programming competition. Our team took the third place in the final round."
        />
        <AwardCard
          title="IX'23 - Finalist"
          organized="IIT"
          description="A UI/UX designation competition that challenges participants to create innovative solutions using VR (Virtual Reality) and XR (Extended Reality) technologies. The 24-hour final round was held at the IIT premises for the top 10 teams."
        />
        <AwardCard
          title="OpenHack 2.0 - 1st Runner UP"
          organized="Mozilla Campus Club of IIT"
          description="A 12h overnight CP hackathon featuring medium to advanced questions. Our team could able to secure 2nd place at the event."
        />
        <AwardCard
          title="Codefest Algothon 2022 - Merit Award"
          organized="SLIIT"
          description="SLIIT CODEFEST 2022 - Algothon was an inter-university competitive programming competition. Our team got into the final round after competing with over 140 participants and securing our place in the top 10 teams."
        />
        <AwardCard
          title="Codefest Hackathon 2022 - Merit Award"
          organized="SLIIT"
          description="SLIIT Codefest Hackathon - A Software Development Hackathon. We were selected among the top 30 teams in the initial round and secured a place in the top 10 with our proposal for the mobile app Foody, promoting sustainable food consumption. In the final round, we developed a reliable mobile-based Election-voting system during the intense 24-hour event at SLIIT"
        />
        <AwardCard
          title="FreshHack 3.0 - 2nd Runner Up"
          organized="UCSC ISACA Student Group"
          description="FreshHack 3.0, A Competitive programming hackathon. Our team took the 3rd place in the final round"
        />
      </div>
    </div>
  );
}

export default Awards;
