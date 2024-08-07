import { ConfigProvider, Steps } from "antd";
import EducationTitle from "./EducationTitle";

function Education() {
  return (
    <div className="flex flex-col gap-8 mt-32">
      <p className="font-bold text-4xl">Education</p>
      <div>
        <ConfigProvider
          theme={{
            components: {
              Steps: {
                navArrowColor: "rgba(255, 255, 255, 0.8)",
              },
            },
            token: {
              colorPrimary: "#990053",
              colorTextDisabled: "#1F1F1F",
              colorSplit: "#1F1F1F",
            },
          }}
        >
          <Steps
            progressDot
            current={0}
            direction="vertical"
            items={[
              {
                description: (
                  <EducationTitle
                    title="Bachelors's Degree"
                    institution="University of Colombo"
                    duration="2022 - Present"
                    description1="Bachelor of Science (Hons.) in Computer Science at University of
          Colombo School of Computing (UCSC)"
                    description2="Current GPA : 3.65 | Director’s List Award"
                  />
                ),
              },

              {
                description: (
                  <EducationTitle
                    title="Secondary Education"
                    institution="Taxila Central College, Horana"
                    duration="2012 - 2020"
                    description1="Passed General Certificate of Education Exams"
                    description2="Ordinary level exam with 9A passes and advanced level exam with z-score of 2.2224  in Combined Maths, Physics and ICT"
                  />
                ),
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Education;
