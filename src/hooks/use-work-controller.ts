import { useState } from "react";
import { IWork } from "../interfaces/work-interface";
import workList from "../settings/work-list";

function useWorkController() {
  const [works, setWorks] = useState<IWork[]>(workList);

  return { works, setWorks };
}

export default useWorkController;
