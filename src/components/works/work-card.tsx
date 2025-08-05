import { FaGithub } from "react-icons/fa6";
import { IWork } from "../../interfaces/work-interface";
import WorkImageComponent from "./work-image-component";
import WorkTechStacks from "./work-techstacks";

interface Props {
  work: IWork;
}

function WorkCard({ work }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <div className="flex text-2xl font-semibold backdrop-blur-md">{work.title}</div>
        <WorkTechStacks work={work} />
      </div>
      <div className="flex">
        <WorkImageComponent work={work} />
      </div>
      {work.githubLink != "" && (
        <div>
          <a
            href={work.githubLink}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
            {work.githubLink == "PRIVATE" ? <p>Private Repository</p> : <p>GitHub Link</p>}
          </a>
        </div>
      )}

      <div className="leading-5 backdrop-blur-sm text-lg">
        <p>{work.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
