import { IPage } from "../interfaces/page-interface";
import ExperiencePage from "../pages/experience-page";
import HomePage from "../pages/home-page";
import MyWorkPage from "../pages/my-work";

export const pages: IPage[] = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "My Work", path: "/my-work", element: <MyWorkPage /> },
  { name: "Experience", path: "/experience", element: <ExperiencePage /> },
];
