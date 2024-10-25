import { Link } from "react-router-dom";
import { IPage } from "../../interfaces/page-interface";

interface Props {
  page: IPage;
  currentPath: string;
}

function NavbarLink({ page, currentPath }: Props) {
  const styling =
    page.path == currentPath ? "font-bold" : "hover:font-semibold";
  const className = `transition-all hover:cursor-hover ${styling}`;
  return (
    <Link to={page.path}>
      <p className={className}>{page.name}</p>
    </Link>
  );
}

export default NavbarLink;
