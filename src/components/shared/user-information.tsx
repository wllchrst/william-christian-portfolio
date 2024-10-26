import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function UserInformation() {
  return (
    <div className="absolute bottom-12 z-20">
      <div className="flex items-center gap-2">
        <div className="border w-24 max-h-0 border-slate-700"></div>
        <a
          href="https://www.linkedin.com/in/william-christian-1b5b531b2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/wllchrst"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default UserInformation;
