import ExperienceCard from "../components/experience/experience-card";
import { educations } from "../settings/education-list";
import { experiences } from "../settings/experience-list";
import "../styles/experience.css";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
function ExperiencePage() {
  return (
    <div className="h-full flex justify-center my-20">
      <div className="flex flex-col gap-14">
        <div className="flex justify-center gap-5">
          <MdOutlineMenuBook size={40} />
          <h1 className="text-3xl">Education</h1>
        </div>
        <div>
          {educations.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
        <div className="flex justify-center gap-5">
          <FaUserTie size={40} />
          <h1 className="text-3xl">Work</h1>
        </div>
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
