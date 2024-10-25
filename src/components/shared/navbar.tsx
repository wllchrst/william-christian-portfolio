import { useLocation } from "react-router-dom";
import { pages } from "../../settings/page-list";
import NavbarLink from "./navbar-link";

function Navbar() {
  const location = useLocation();
  return (
    <div className="flex justify-center gap-6">
      {pages.map((page, index) => (
        <NavbarLink key={index} page={page} currentPath={location.pathname} />
      ))}
    </div>
  );
}

export default Navbar;
