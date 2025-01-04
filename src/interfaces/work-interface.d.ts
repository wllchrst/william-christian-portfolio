import { ITechStack } from "./tech-stack-interfce";

export interface IWork {
  title: string;
  description: string;
  mainPhoto: string;
  secondPhoto: string;
  thirdPhoto: string;
  startTime: string;
  endTime: string;
  githubLink: string;
  techStacks: ITechStack[];
}
