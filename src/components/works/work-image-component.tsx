import { IWork } from "../../interfaces/work-interface";

interface Props {
  work: IWork;
}
function WorkImageComponent({ work }: Props) {
  return (
    <div className="flex gap-3 ">
      <div className="w-2/3 rounded-md overflow-hidden shadow-lg relative hover:border hover:border-gray-400 transition-all">
        <div className="absolute p-4 right-0 bg-blue-400 text-white rounded-sm transition-all hover:bg-blue-200 hover:text-black">
          <p>Click Me!</p>
        </div>
        <img src={work.mainPhoto} alt={work.mainPhoto} className="" />
      </div>
      <div className="flex w-1/3 flex-col justify-between gap-3 ">
        <div className="rounded-md overflow-hidden shadow-lg hover:border hover:border-gray-400 transition-all">
          <img src={work.secondPhoto} alt={work.secondPhoto} />
        </div>
        <div className="rounded-md overflow-hidden shadow-lg hover:border hover:border-gray-400 transition-all">
          <img src={work.thirdPhoto} alt={work.thirdPhoto} />
        </div>
      </div>
    </div>
  );
}

export default WorkImageComponent;
