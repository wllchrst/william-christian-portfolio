import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import ProviderLayout from "./layouts/provider-layout";
import { pages } from "./settings/page-list";

function App() {
  return (
    <>
      <ProviderLayout>
        <MainLayout>
          <Routes>
            {pages.map((page, index) => (
              <Route path={page.path} element={page.element} key={index} />
            ))}
          </Routes>
        </MainLayout>
      </ProviderLayout>
    </>
  );
}

export default App;
