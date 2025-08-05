import workList from "../../settings/work-list";
import WorkCard from "./work-card";

function WorkListComponent() {
  return (
    <>
      <div className="flex justify-center py-14">
        <div className="flex flex-col justify-center max-w-[900px] gap-20">
          {workList.map((work, index) => (
            <div key={index}>
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default WorkListComponent;
