import { BrowserRouter } from "react-router-dom";
import { IChildren } from "../interfaces/children-interface";

function ProviderLayout({ children }: IChildren) {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
}

export default ProviderLayout;
