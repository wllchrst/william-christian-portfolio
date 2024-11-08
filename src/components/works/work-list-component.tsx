import workList from "../../settings/work-list";
import WorkCard from "./work-card";

function WorkListComponent() {
  return (
    <>
      <div className="flex justify-center mt-14">
        <div className="flex flex-col justify-center max-w-[900px] gap-8">
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
