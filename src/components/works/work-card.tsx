import { IWork } from "../../interfaces/work-interface";
import WorkImageComponent from "./work-image-component";

interface Props {
  work: IWork
}

function WorkCard({ work }: Props) {
  return <div className="flex flex-col">
    <div className="flex">{work.title}</div>
    <div className="flex">
      <WorkImageComponent work={work}/>
    </div>
  </div>
}

export default WorkCard;
