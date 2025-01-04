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
        <div className="flex text-2xl font-semibold">{work.title}</div>
        <WorkTechStacks work={work}/>
      </div>
      <div className="flex">
        <WorkImageComponent work={work} />
      </div>
      <div className="italic leading-5">
        <p>{work.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
