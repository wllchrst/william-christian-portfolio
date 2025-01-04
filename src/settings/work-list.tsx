import { SiNestjs, SiPostgresql } from "react-icons/si";
import { IWork } from "../interfaces/work-interface";
import { FaReact } from "react-icons/fa";
import { FaGolang, FaPython } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const workList: IWork[] = [
  {
    title: "Skill Connect",
    description:
      "Competition I joined in Univeristy of Indonesia, to create application that is powered with Artificial Intelligence, where there is Friend and Group Recommendation, Course Recommendation and also Find Course",
    mainPhoto: "/project-images/skill-connect/1.png",
    secondPhoto: "/project-images/skill-connect/2.png",
    thirdPhoto: "/project-images/skill-connect/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaPython size={25} />
          </>
        ),
        description:
          "Python: Deep Learning, Machine Learning, Deploying Model Made From Training",
      },
      {
        icon: (
          <>
            <SiNestjs size={25} />
          </>
        ),
        description: "NestJs: Backend, Connecting Model Deployment With Client",
      },
      {
        icon: (
          <>
            <FaReact size={25} />
          </>
        ),
        description: "React: Frontend Library For Client Side",
      },
      {
        icon: (
          <>
            <BiLogoPostgresql size={25} />
          </>
        ),
        description: "PostgreSQL: Database for the application",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
  },
  {
    title: "Travelohi",
    description:
      "Travelohi is a replication for the application Traveloka for Test Progressive Assistant, Created using Golang, React, and PostgreSQL",
    mainPhoto: "/project-images/travelohi/1.png",
    secondPhoto: "/project-images/travelohi/2.png",
    thirdPhoto: "/project-images/travelohi/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaReact size={25} />
          </>
        ),
        description: "React: Frontend Library for Client Side",
      },
      {
        icon: (
          <>
            <FaGolang size={25} />
          </>
        ),
        description: "Go: Backend for connecting to Database and creating API",
      },
      {
        icon: (
          <>
            <FaPython size={25} />
          </>
        ),
        description:
          "Python: Deep Learning, Machine Learning, Deploying Model Made From Training",
      },
      {
        icon: (
          <>
            <BiLogoPostgresql size={25} />
          </>
        ),
        description: "PostgreSQL: Database for the application",
      },
      {
        icon: (
          <>
            <IoLogoFirebase size={25} />
          </>
        ),
        description:
          "Firebase: Firebase Storage was used for saving images in this application",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
  },
  {
    title: "Sck Men Wear",
    description:
      " SCK Men Wear is an elegant, user-friendly website designed to showcase and promote products from SCK Men Wear, a distinguished men's fashion store. The platform serves as a digital storefront to welcome customers, highlighting the quality and variety of the shop's offerings while ensuring a seamless browsing experience.",
    mainPhoto: "/project-images/sck-men-wear/1.png",
    secondPhoto: "/project-images/sck-men-wear/2.png",
    thirdPhoto: "/project-images/sck-men-wear/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaReact size={25} />
          </>
        ),
        description: "React: Frontend Library for Client Side",
      },
      {
        icon: (
          <>
            <IoLogoFirebase size={25} />
          </>
        ),
        description: "Firebase: Used for saving all data from the application",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
  },
  {
    title: "Linkasa",
    description:
      "Appliation to learn about System design and analyzing, where I need to create diagrams to help create the main application",
    mainPhoto: "/project-images/linkasa/1.png",
    secondPhoto: "/project-images/linkasa/2.png",
    thirdPhoto: "/project-images/linkasa/3.png",
    techStacks: [],
    startTime: "July 2024",
    endTime: "September 2024",
  },
  {
    title: "Projector",
    description:
      "Small project I created, where user can create and build new projects together.",
    mainPhoto: "/project-images/projector/1.png",
    secondPhoto: "/project-images/projector/2.png",
    thirdPhoto: "/project-images/projector/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaReact size={25} />
          </>
        ),
        description: "React: Frontend Library for Client Side",
      },
      {
        icon: (
          <>
            <IoLogoFirebase size={25} />
          </>
        ),
        description: "Firebase: Used for saving all data from the application",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
  },
  {
    title: "Bank Prediction",
    description:
      "Project I build to learn Machine Learning using scikit-learn and also deploying a model using FastAPI",
    mainPhoto: "/project-images/bank-prediction/1.png",
    secondPhoto: "/project-images/bank-prediction/2.png",
    thirdPhoto: "/project-images/bank-prediction/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaPython size={25} />
          </>
        ),
        description:
          "Python: Machine Learning library for training",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
  },
];

export default workList;
