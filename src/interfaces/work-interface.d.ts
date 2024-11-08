import { ITechStack } from "./tech-stack-interfce";

export interface IWork {
  title: string;
  description: string;
  mainPhoto: string;
  secondPhoto: string;
  thirdPhoto: string;
  startTime: Date;
  endTime: Date;
  techStacks: ITechStack[];
}
