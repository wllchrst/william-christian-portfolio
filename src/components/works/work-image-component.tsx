import { IWork } from "../../interfaces/work-interface";

interface Props {
    work: IWork;
}
function WorkImageComponent({ work }: Props) {
    return <div className="flex">
        <div className="w-1/2 border border-pink-300">
            <img src={work.mainPhoto} alt={work.mainPhoto} />
        </div>
        <div className="flex w-1/2 border border-green-400">
            <img src={work.secondPhoto} alt={work.secondPhoto} />
            <img src={work.thirdPhoto} alt={work.thirdPhoto} />
        </div>
    </div>
}

export default WorkImageComponent