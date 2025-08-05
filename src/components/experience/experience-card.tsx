import { IExperience } from "../../interfaces/experience-interface";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  experience: IExperience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <>
      <div className="flex gap-x-3 ">
        <div className="w-72 text-end">
          <span className="text-sm text-gray-600 font-semibold backdrop-blur-sm">
            {experience.start} - {experience.end}
          </span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-sky-800" />
          </div>
        </div>
        <div className="grow pt-0.5 pb-8 backdrop-blur-sm">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 items-center">
            <FaLocationDot />
            {experience.company}
          </h3>
          <p className="mt-2 text-md text-gray-600 font-semibold italic ">
            {experience.position}
          </p>
          <p className="mt-1 text-sm whitespace-pre-line text-gray-600 ">
            {experience.jobDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
