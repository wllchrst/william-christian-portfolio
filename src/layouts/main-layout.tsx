import Navbar from "../components/shared/navbar";
import Particles from "../components/shared/particle-background";
import UserInformation from "../components/shared/user-information";
import { IChildren } from "../interfaces/children-interface";

function MainLayout({ children }: IChildren) {
  return (
    <div>
      <Particles />
      <UserInformation />
      <div className="h-screen p-5 cursor-normal transition-all z-10 relative content">
        <Navbar />

        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
