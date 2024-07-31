import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board_Ambulance from "./pages/Board_Ambulance";
import HomePage from "./pages/homepage";
import SupportDashBoard from "./pages/dashboards/support";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/Board_Ambulance"  element={<Board_Ambulance />} />
        <Route path="/pages/dashboards/support"  element={<SupportDashBoard />} />
        <Route path="*"         element={<div> Page not found </div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
