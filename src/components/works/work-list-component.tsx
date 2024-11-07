import workList from "../../settings/work-list";
import WorkCard from "./work-card";

function WorkListComponent() {
  return <>
    <div className="border grid grid-cols-1 gap-4">
      {workList.map((work, index) => (
        <div key={index}><WorkCard work={work} /></div>
      ))}
    </div>
  </>;
}
export default WorkListComponent;