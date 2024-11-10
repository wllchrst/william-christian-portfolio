import { IWork } from "../../interfaces/work-interface";
import PictureModal from "../shared/picture-modal";

interface Props {
  work: IWork;
}
function WorkImageComponent({ work }: Props) {
  return (
    <div className="flex gap-3 ">
      <div className="w-2/3 rounded-md overflow-hidden shadow-lg relative hover:border-2 hover:border-gray-400 transition-all hover:cursor-hover">
        <div className="absolute p-4 right-0 bg-blue-400 text-white rounded-sm transition-all">
          <p>Click Me!</p>
        </div>
        <PictureModal imagePath={work.mainPhoto} />
      </div>
      <div className="flex w-1/3 flex-col justify-between gap-3 ">
        <div className="rounded-md overflow-hidden shadow-lg hover:border-2 hover:border-gray-400 transition-all hover:cursor-hover">
          <PictureModal imagePath={work.secondPhoto} />
        </div>
        <div className="rounded-md overflow-hidden shadow-lg hover:border-2 hover:border-gray-400 transition-all hover:cursor-hover">
          <PictureModal imagePath={work.thirdPhoto} />
        </div>
      </div>
    </div>
  );
}

export default WorkImageComponent;
