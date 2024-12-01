// src/routes/Routes.tsx
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

import LayoutWrapper from "../layouts/LayoutWrapper";
import LayoutWrapperNoSidebar from "../layouts/LayoutWrapperNoSidebar";
import ManagerAccount from "../pages/ManagerAccount";
import ManagerPicture from "../pages/ManagerPicture";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapperNoSidebar />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/admin/" element={<LayoutWrapper />}>
        <Route path="manager-picture" element={<ManagerPicture />} />
        <Route path="manager-account" element={<ManagerAccount />} />

        {/* Các route khác có layout */}
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
