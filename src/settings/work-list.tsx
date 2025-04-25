import { SiDotnet, SiLangchain, SiMilvus, SiNestjs } from "react-icons/si";
import { IWork } from "../interfaces/work-interface";
import { FaReact } from "react-icons/fa";
import { FaGolang, FaPython, FaRust } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { MdOutlineSoupKitchen } from "react-icons/md";

const workList: IWork[] = [
  {
    title: "Learning Bot RAG",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) chatbot capable of answering questions based on university course materials",
    mainPhoto: "/project-images/learning-bot-rag/1.png",
    secondPhoto: "/project-images/learning-bot-rag/2.jpg",
    thirdPhoto: "/project-images/learning-bot-rag/3.jpg",
    techStacks: [
      {
        icon: (
          <>
            <SiLangchain size={25} />
          </>
        ),
        description:
          "Utilized Langchain to manage the data ingestion pipeline, including document loading, text splitting, and orchestrating the chatbot’s flow",
      },
      {
        icon: (
          <>
            <SiMilvus size={25} />
          </>
        ),
        description: "Implemented Milvus as the vector database for efficient similarity search over embedded documents.",
      },
      {
        icon: (
          <>
            <MdOutlineSoupKitchen size={25} />
          </>
        ),
        description: "Employed BeautifulSoup to scrape educational content from web pages for knowledge base enrichment",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
    githubLink: "https://github.com/wllchrst/timeseries-forecasting-ops",
  },
  {
    title: "Request SLC",
    description:
      "Develop ticket-based application for helping on tracking requests for bug fixing and features from external divisions that uses application in SLC. Improving documentation of all requests and features",
    mainPhoto: "/project-images/request-slc/1.png",
    secondPhoto: "/project-images/request-slc/2.png",
    thirdPhoto: "/project-images/request-slc/3.png",
    techStacks: [
      {
        icon: (
          <>
            <SiDotnet size={25} />
          </>
        ),
        description:
          ".NET: framework that support our backend developement",
      },
      {
        icon: (
          <>
            <RiNextjsFill size={25} />
          </>
        ),
        description: "Next JS: Frontend Framework For Client Side",
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
    githubLink: "PRIVATE",
  },
  {
    title: "Time Series Forecasting Ops",
    description:
      "Develop ticket-based application for helping on tracking requests for bug fixing and features from external divisions that uses application in SLC. Improving documentation of all requests and features",
    mainPhoto: "/project-images/time-series/1.png",
    secondPhoto: "/project-images/time-series/2.png",
    thirdPhoto: "/project-images/time-series/3.png",
    techStacks: [
      {
        icon: (
          <>
            <SiDotnet size={25} />
          </>
        ),
        description:
          ".NET: framework that support our backend developement",
      },
      {
        icon: (
          <>
            <RiNextjsFill size={25} />
          </>
        ),
        description: "Next JS: Frontend Framework For Client Side",
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
    githubLink: "https://github.com/wllchrst/timeseries-forecasting-ops",
  },
  {
    title: "Request SLC",
    description:
      "Develop ticket-based application for helping on tracking requests for bug fixing and features from external divisions that uses application in SLC. Improving documentation of all requests and features",
    mainPhoto: "/project-images/request-slc/1.png",
    secondPhoto: "/project-images/request-slc/2.png",
    thirdPhoto: "/project-images/request-slc/3.png",
    techStacks: [
      {
        icon: (
          <>
            <SiDotnet size={25} />
          </>
        ),
        description:
          ".NET: framework that support our backend developement",
      },
      {
        icon: (
          <>
            <RiNextjsFill size={25} />
          </>
        ),
        description: "Next JS: Frontend Framework For Client Side",
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
    githubLink: "PRIVATE",
  },
  {
    title: "Resman SLC",
    description:
      "Guided and lead a group of 3 developers to create and plan an application that is used managing assistant schedules and jobs",
    mainPhoto: "/project-images/resman/1.png",
    secondPhoto: "/project-images/resman/2.png",
    thirdPhoto: "/project-images/resman/3.png",
    techStacks: [
      {
        icon: (
          <>
            <SiDotnet size={25} />
          </>
        ),
        description:
          ".NET: framework that support our backend developement",
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
    githubLink: "PRIVATE",
  },
  {
    title: "Nomen Nescio",
    description:
      "CodeFest Hackathon application, where we are tasked to created an application for Web3 BlockChain, My team and I created an Emailing System where the user private information is saved using blockchain and if the user wants to open their email they need verify the signature so that email is saved from other people.",
    mainPhoto: "/project-images/nomen-nescio/1.png",
    secondPhoto: "/project-images/nomen-nescio/2.png",
    thirdPhoto: "/project-images/nomen-nescio/3.png",
    techStacks: [
      {
        icon: (
          <>
            <FaPython size={25} />
          </>
        ),
        description:
          "Python: Deep Learning, Deploying Model Made From Training",
      },
      {
        icon: (
          <>
            <FaRust size={25} />
          </>
        ),
        description: "Rust: Backend and Blockchain for the application",
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
    githubLink: "https://github.com/wllchrst/nomen-nescio",
  },
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
    githubLink: "https://github.com/wllchrst/skill-connect-compfest",
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
    githubLink: "https://github.com/wllchrst/travelohi",
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
    githubLink: "https://github.com/wllchrst/sck-men-wear",
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
    githubLink: "https://github.com/wllchrst/linkasa-desktop",
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
    githubLink: "https://github.com/wllchrst/project-management-app",
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
        description: "Python: Machine Learning library for training",
      },
    ],
    startTime: "July 2024",
    endTime: "September 2024",
    githubLink: "",
  },
];

export default workList;
