import HowToPlay from "./how-to-play";
import MainMenu from "./main-menu";
import { Route, Routes } from "react-router-dom";
function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </div>
  );
}

export default PageRouter;
