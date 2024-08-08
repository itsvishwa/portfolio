import AboutRow from "./AboutRow";

function About() {
  return (
    <div id="about" className="flex flex-col gap-8 my-32">
      <p className="font-bold text-2xl lg:text-4xl">About</p>
      <p>
        A third-year Computer Science undergraduate at the University of Colombo
        School of Computing with a strong curiosity for learning new
        technologies and a vivid imagination that aids problem-solving and
        innovation. Possesses the ability to adapt to any technology within a
        short period. Additionally, a cinema enthusiast with a passion for
        videography.
      </p>
      <div className="flex flex-col gap-4">
        <AboutRow
          title1="Name"
          content1="Vishwa Sandaruwan"
          title2="University"
          content2="University of Colombo, Sri Lanka"
        />
        <AboutRow
          title1="From"
          content1="Kalutara, Sri Lanka"
          title2="Email"
          content2="vishwasandaruwan44@gmail.com"
        />
        <AboutRow
          title1="Time Zone"
          content1="GMT + 5.30"
          title2="Coffee Lover ?"
          content2="Yes 😉"
        />
      </div>
    </div>
  );
}

export default About;
