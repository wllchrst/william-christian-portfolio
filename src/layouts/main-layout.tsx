import Navbar from "../components/shared/navbar";
import UserInformation from "../components/shared/user-information";
import { IChildren } from "../interfaces/children-interface";
import InteractiveDots from "../components/shared/interactive-dots.tsx";

function MainLayout({ children }: IChildren) {
  return (
    <div>
        <InteractiveDots/>
      <UserInformation />
      <div className="h-screen p-5 cursor-normal transition-all z-10 relative content">
        <Navbar />
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
